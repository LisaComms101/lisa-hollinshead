---
name: Homepage hero viewport contract
description: The minimum desktop viewport requirement for the Lisa Hollinshead homepage hero.
---

The fixed header, descriptor, complete headline, supporting copy, and both hero CTAs must fit fully within the first viewport at 1366×768 and 1440×900.

**Why:** A layout that passed at 1440×900 still clipped the bottoms of both CTAs at 1366×768. Visual presence in the DOM is insufficient; the complete button boxes must remain above the viewport edge.

**How to apply:** After any hero typography, spacing, header, or image-layout change, verify actual viewport-relative CTA bounds at both desktop sizes. Also check 390×844 for horizontal overflow and primary CTA visibility.