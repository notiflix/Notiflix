---
name: FeatureRequest
about: Suggest an idea to help us improve.
title: "[FEAT] - "
labels: enhancement
assignees: furcan
projects: Notiflix
body:
  - type: markdown
    attributes:
      value: |
        Lorem ipsum dolor sit amet.
  - type: textarea
    id: what-happened
    attributes:
      label: What happened?
      description: Also tell us, what did you expect to happen?
      placeholder: Tell us what you see.
      value: "Lorem ipsum"        
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our [Code of Conduct](https://github.com/notiflix/Notiflix/blob/main/CODE_OF_CONDUCT.md)
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true
---
