import re

file_path = "/Users/jumjum22/Downloads/JIGUGEOJU_Pages/v3/style.css"

with open(file_path, "r") as f:
    css = f.read()

# Page 3 airplane and line
css = re.sub(
    r'(\.decor-dashed-line\s*\{[^}]*?)\s*animation:\s*lineDraw[^;]+;\n',
    r'\1\n}\n\n.page-section.is-animated .decor-dashed-line {\n  animation: lineDraw 2.8s infinite cubic-bezier(0.4, 0, 0.2, 1);\n',
    css
)

css = re.sub(
    r'(\.decor-airplane\s*\{[^}]*?)\s*animation:\s*airplaneFlight[^;]+;\n',
    r'\1\n}\n\n.page-section.is-animated .decor-airplane {\n  animation: airplaneFlight 2.8s infinite cubic-bezier(0.4, 0, 0.2, 1);\n',
    css
)

# Page 5 phase 1, phase 2, magnifier
css = re.sub(
    r'(\.page5-phase1-content\s*\{)\s*animation:\s*page5Phase1Fade[^;]+;\n',
    r'\1\n}\n\n.page-section.is-animated .page5-phase1-content {\n  animation: page5Phase1Fade 3.0s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n',
    css
)

css = re.sub(
    r'(\.page5-phase2-content\s*\{[^}]*?)\s*animation:\s*page5Phase2FadeIn[^;]+;\n',
    r'\1\n}\n\n.page-section.is-animated .page5-phase2-content {\n  animation: page5Phase2FadeIn 3.0s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n',
    css
)

css = re.sub(
    r'(\.magnifier-inspecting-img\s*\{[^}]*?)\s*animation:\s*magnifierInspectTwoMoves[^;]+;\n',
    r'\1\n}\n\n.page-section.is-animated .magnifier-inspecting-img {\n  animation: magnifierInspectTwoMoves 3.0s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n',
    css
)

with open(file_path, "w") as f:
    f.write(css)

print("CSS updated successfully.")
