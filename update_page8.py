import re

html_path = '/Users/jumjum22/Downloads/JIGUGEOJU_Pages/v3/index.html'
js_path = '/Users/jumjum22/Downloads/JIGUGEOJU_Pages/v3/merged-script.js'

with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

with open(js_path, 'r', encoding='utf-8') as f:
    js = f.read()

# 1. Replace HTML
new_html_block = '''          <!-- INNER SCREEN VIDEO CONTAINER (UNIFORM SURROUNDING BORDERS) -->
          <div class="sec8-video-screen-clip" id="sec8-video-container">
            <iframe id="sec8-demo-video" class="sec8-demo-video" src="https://www.youtube.com/embed/of84nr4HCCc?rel=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            <!-- INNER BLACK STROKE BORDER OVERLAY ON VIDEO -->
            <div class="sec8-video-inner-stroke" style="pointer-events: none;"></div>
          </div>'''

# Find the block starting with "<!-- INNER SCREEN VIDEO CONTAINER" and ending with "</div>" after "sec8-volume-control-wrapper" block.
# Actually, it's easier to use a regex to match the old block and replace it.
pattern_html = re.compile(
    r'<!-- INNER SCREEN VIDEO CONTAINER .*?<!-- INNER SCREEN VIDEO CONTAINER.*?<div class="sec8-video-screen-clip" id="sec8-video-container">.*?<!-- VOLUME CONTROL BUTTON AT BOTTOM RIGHT WHITE SPACE.*?</div>\s*</div>',
    re.DOTALL
)

# A safer regex pattern based on exact structure:
pattern_html_safe = re.compile(
    r'<!-- INNER SCREEN VIDEO CONTAINER.*?</video>.*?</button>.*?sec8-bottom-control-bar.*?</div>\s*</div>\s*<!-- VOLUME CONTROL BUTTON.*?</div>\s*</div>',
    re.DOTALL
)

# Let's verify the replacement first by trying to find the block.
match = pattern_html_safe.search(html)
if match:
    html = html[:match.start()] + new_html_block + html[match.end():]
else:
    print("HTML block not found!")

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)

# 2. Replace JS
pattern_js = re.compile(
    r'// 6\. PAGE 8 EXTENSION DEMO VIDEO INTERACTION, SEEK BAR & VOLUME CONTROL.*?// Initial setup\s*updateVolumeUI\(\);\s*updateVideoProgressUI\(\);\s*\}\s*',
    re.DOTALL
)

match_js = pattern_js.search(js)
if match_js:
    js = js[:match_js.start()] + js[match_js.end():]
else:
    print("JS block not found!")

with open(js_path, 'w', encoding='utf-8') as f:
    f.write(js)

print("Done updating files.")
