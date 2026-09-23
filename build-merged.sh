#!/bin/bash
# Build merged index.html from individual pages
cd /Users/jumjum22/Downloads/JIGUGEOJU_Pages/v3

OUTPUT="index.html"

# Function to extract body content (between <body ...> and </body>), excluding <script> tags
extract_body() {
  local file="$1"
  # Use awk to get lines between <body> and </body> (exclusive), then remove <script> lines
  awk '/<body/{found=1; next} /<\/body>/{found=0} found' "$file" | grep -v '<script'
}

# Write HTML header
cat > "$OUTPUT" << 'HEADER'
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JIGU JEOGU | 지구를 위한 저속 구매</title>
  <meta name="description" content="지구를 위한 저속 구매, JIGU JEOGU. 브랜드 홈페이지 전체 스크롤 페이지.">
  <!-- Preload Pretendard Fonts -->
  <link rel="preload" as="font" type="font/woff2" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/woff2/Pretendard-ExtraBold.woff2">
  <link rel="preload" as="font" type="font/woff2" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/woff2/Pretendard-Bold.woff2">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
  <link rel="stylesheet" href="style.css">
  <style>
    /* Override body.pageX-body selectors to work as wrapper classes in merged page */
    html, body {
      margin: 0;
      padding: 0;
      background-color: #FFFFFF;
    }

    /* Page 1 overrides - originally body.page1-body .xxx */
    .page1-body .ipad-device-container {
      height: auto !important;
      min-height: 0 !important;
      max-height: none !important;
    }
    .page1-body .ipad-screen-body {
      min-height: 0 !important;
    }
    .page1-body .top-title-overlay {
      padding-top: 15px !important;
      top: 0px !important;
      gap: 30px !important;
    }
    .page1-body .header-logo-img {
      transform: translateY(0px) !important;
    }
    .page1-body .sub-title-text {
      font-size: clamp(2.5rem, 5.0vw, 4.0rem) !important;
      margin-bottom: 30px !important;
      font-weight: 800 !important;
      transform: translateY(35px) !important;
    }
    .page1-body .main-title-text {
      font-size: clamp(4.3rem, 11.0vw, 9.5rem) !important;
      margin-top: -10px !important;
    }
    .page1-body .props-illustration-wrapper {
      max-width: 950px !important;
    }
    .page1-body .central-graphics-section {
      margin-top: 255px !important;
      flex: none !important;
    }

    /* Each page section wrapper */
    .page-section {
      width: 100%;
      position: relative;
    }
  </style>
</head>
<body>

HEADER

# Process each page
declare -a PAGEFILES=("page1" "page2" "page3" "page4" "page5" "page6" "page7" "page8" "page9")
declare -a BODYCLASSES=("page1-body" "page2-body" "page3-body" "page4-body" "page5-body" "page6-body" "page7-body" "page8-body" "page9-10-body")

for i in "${!PAGEFILES[@]}"; do
  pagefile="${PAGEFILES[$i]}"
  bodyclass="${BODYCLASSES[$i]}"
  pagenum=$((i + 1))
  
  echo "" >> "$OUTPUT"
  echo "  <!-- ==================== PAGE $pagenum ==================== -->" >> "$OUTPUT"
  echo "  <div class=\"page-section $bodyclass\" id=\"page-section-$pagenum\">" >> "$OUTPUT"
  
  # Extract body content and replace ipad-container id with unique version
  extract_body "${pagefile}.html" | sed "s/id=\"ipad-container\"/id=\"ipad-container-${pagenum}\"/" >> "$OUTPUT"
  
  echo "  </div>" >> "$OUTPUT"
done

# Write HTML footer
cat >> "$OUTPUT" << 'FOOTER'

  <script src="merged-script.js"></script>
</body>
</html>
FOOTER

echo "Done! index.html created."
wc -l "$OUTPUT"
ls -la "$OUTPUT"
