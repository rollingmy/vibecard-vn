# Layout Integrity Protocol (LIP)

**Strictly follow these rules when ensuring visual consistency for VibeCard templates.**

## 1. Variable Text Constraints (Auto-Scaling)
Text length is unpredictable. Never assume a fixed font size is safe.
- **Rule**: Every user-input field (Name, Role, ID) must have a calculated `maxFontSize`.
- **Pattern**:
  ```tsx
  // BAD
  fontSize="20"
  
  // GOOD
  fontSize={Math.min(defaultSize, maxWidth / text.length)}
  ```

## 2. Bounding Box Strategy
Text must never bleed into other elements.
- **Rule**: Define a hard `maxWidth` for every text element.
- **Action**: If text exceeds this width, it must scale down (see Rule 1) or wrap.

## 3. Safe Zones (Padding)
- **Rule**: Maintain a mandatory **padding of at least 20px** from the card's outer borders.
- **Action**: No important element (text, logo, QR code) should touch the edge.

## 4. Anchor Discipline
- **Rule**: Use `textAnchor="middle"` for centered layouts.
- **Action**: Calculate X-coordinates based on the exact center of the container (e.g., `width/2`), not estimated offsets.

## 5. Stress Test Defaults
- **Rule**: Initialize all templates with **LONG default values** during development.
- **Action**: Use "NGUYỄN VĂN HÙNG VƯƠNG LONG" instead of "User" to immediately reveal overlap issues.

## 6. Verification Checklist
Before marking a template as done:
- [ ] Does a 25-character name overlap with graphics?
- [ ] Is there 20px padding on all sides?
- [ ] Does the avatar clip correctly?
