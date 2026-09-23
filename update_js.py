import re

file_path = "/Users/jumjum22/Downloads/JIGUGEOJU_Pages/v3/merged-script.js"

with open(file_path, "r") as f:
    js = f.read()

# 1. Modify Page 7 logic
# Find 'goToSec7Step(0);' and replace it with observer logic
page7_replacement = """
    // Trigger typing effect when scrolled into view
    const sec7Observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          goToSec7Step(sec7Step); // Play typing effect for current step
        } else {
          // Reset so it plays again when returning (optional, but requested behavior is to play fresh)
          // We can just clear it if needed, but goToSec7Step already clears and re-types.
        }
      });
    }, { threshold: 0.35 });
    
    const sec7Section = document.getElementById('page-section-7');
    if (sec7Section) {
      sec7Observer.observe(sec7Section);
    } else {
      goToSec7Step(0); // Fallback
    }
"""
js = js.replace("    goToSec7Step(0);", page7_replacement)

# 2. Modify Page 9 logic
# Find 'setTimeout(triggerReceiptPrint, 350);' and replace it with observer logic
page9_replacement = """
    const sec9Observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          triggerReceiptPrint();
        } else {
          sec9Paper.classList.remove('is-printed'); // Allow replay when scrolled back
        }
      });
    }, { threshold: 0.35 });
    
    const sec9Section = document.getElementById('page-section-9');
    if (sec9Section) {
      sec9Observer.observe(sec9Section);
    } else {
      setTimeout(triggerReceiptPrint, 350); // Fallback
    }
"""
js = js.replace("    setTimeout(triggerReceiptPrint, 350);", page9_replacement)

# 3. Add global observer for Page 3 and Page 5 at the end, right before the last closing brace '});'
css_observer_code = """
  // ==========================================================================
  // SCROLL ENTRANCE OBSERVER FOR CSS ANIMATIONS (Page 3, Page 5)
  // ==========================================================================
  const cssAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-animated');
      } else {
        entry.target.classList.remove('is-animated'); // Replay on return
      }
    });
  }, { threshold: 0.35 });
  
  const page3 = document.getElementById('page-section-3');
  const page5 = document.getElementById('page-section-5');
  if (page3) cssAnimationObserver.observe(page3);
  if (page5) cssAnimationObserver.observe(page5);
"""

# Append just before '});\n' at the end of the file
js = re.sub(r'\}\);\s*$', css_observer_code + '\n});\n', js)

with open(file_path, "w") as f:
    f.write(js)

print("JS updated successfully.")
