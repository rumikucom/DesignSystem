#!/usr/bin/env python3
"""
Color Extractor for Design Systems
Takes an image file (PNG/JPG/WebP) and extracts the dominant primary and secondary colors.
Ignores pure white, pure black, and transparent backgrounds.

Usage: python extract_colors.py <path_to_image>
"""

import sys
import json
from collections import Counter

try:
    from PIL import Image
except ImportError:
    print(json.dumps({"error": "The Pillow library is required. Please run: pip install Pillow"}))
    sys.exit(1)

def rgb_to_hex(rgb):
    return '#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2])

def extract_dominant_colors(image_path, num_colors=5):
    try:
        # Open image and convert to RGBA (to handle transparency)
        img = Image.open(image_path).convert('RGBA')
        
        # Resize to speed up processing and naturally group similar pixels
        img.thumbnail((150, 150))
        
        # Get pixels
        pixels = list(img.getdata())
        
        # Filter out highly transparent pixels and near-white/near-black backgrounds
        valid_pixels = []
        for r, g, b, a in pixels:
            if a < 125:  # Skip mostly transparent pixels
                continue
            if r > 240 and g > 240 and b > 240: # Skip near white (often background)
                continue
            if r < 15 and g < 15 and b < 15: # Skip near black (often background/text)
                continue
                
            # Quantize colors slightly to group very similar shades together (round to nearest 10)
            quantized = (round(r/10)*10, round(g/10)*10, round(b/10)*10)
            # Ensure we don't exceed 255 due to rounding
            quantized = tuple(min(255, val) for val in quantized)
            valid_pixels.append(quantized)
            
        if not valid_pixels:
            print(json.dumps({"error": "No valid non-background colors found in image."}))
            sys.exit(1)
            
        # Count frequencies
        color_counts = Counter(valid_pixels)
        
        # Get most common colors
        dominant_colors = color_counts.most_common(num_colors)
        
        results = {
            "primary": rgb_to_hex(dominant_colors[0][0]),
            "secondary": rgb_to_hex(dominant_colors[1][0]) if len(dominant_colors) > 1 else rgb_to_hex(dominant_colors[0][0]),
            "all_extracted_hex": [rgb_to_hex(color[0]) for color in dominant_colors],
            "raw_counts": [{"hex": rgb_to_hex(color[0]), "pixel_count": color[1]} for color in dominant_colors]
        }
        
        print(json.dumps(results, indent=2))
        
    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"error": "Usage: python extract_colors.py <path_to_image>"}))
        sys.exit(1)
        
    extract_dominant_colors(sys.argv[1])
