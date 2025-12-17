# Contributing to Vibe Check

Thanks for your interest in contributing! This document outlines how to get started.

## Development Setup

### Prerequisites

- Python 3.11+
- pip

### Installation

```bash
# Clone the repo
git clone https://github.com/ihlamury/vibe-check.git
cd vibe-check

# Install in development mode with dev dependencies
pip install -e ".[dev]"

# Install MCP for server development
pip install mcp
```

### Running Tests

```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=vibe

# Run specific test file
pytest tests/test_scanner.py
```

### Code Style

We use `ruff` for linting and `black` for formatting:

```bash
# Check linting
ruff check .

# Fix linting issues
ruff check --fix .

# Format code
black .

# Type checking
mypy vibe
```

## Project Structure

```
vibe-check/
├── vibe/
│   ├── cli.py              # CLI entry point
│   ├── commands/           # CLI commands (init, check, lock, serve)
│   ├── scanner/            # File discovery and token extraction
│   ├── analyzer/           # Issue detection logic
│   ├── reporter/           # Output formatting (console, JSON, markdown)
│   ├── lock/               # Design system schema and generation
│   └── mcp/                # MCP server implementation
├── tests/
│   ├── fixtures/           # Test files
│   ├── test_scanner.py
│   └── test_analyzer.py
└── pyproject.toml
```

## How to Contribute

### Reporting Bugs

1. Check if the issue already exists
2. Create a new issue with:
   - Clear title
   - Steps to reproduce
   - Expected vs actual behavior
   - Your environment (OS, Python version, etc.)

### Suggesting Features

1. Open an issue with the `enhancement` label
2. Describe the use case
3. Explain why this would benefit others

### Submitting Pull Requests

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Add tests for new functionality
5. Ensure tests pass: `pytest`
6. Ensure code is formatted: `black . && ruff check .`
7. Commit with clear message: `git commit -m "Add: feature description"`
8. Push: `git push origin feature/my-feature`
9. Open a PR

### Commit Messages

Use conventional commits:

- `Add:` New feature
- `Fix:` Bug fix
- `Docs:` Documentation changes
- `Test:` Test changes
- `Refactor:` Code refactoring
- `Chore:` Maintenance tasks

## Areas to Contribute

### Good First Issues

- Add more Tailwind class patterns to scanner
- Improve error messages
- Add more test cases
- Documentation improvements

### Larger Projects

- GitHub Action for CI/CD integration
- VS Code extension
- Support for CSS-in-JS (styled-components, emotion)
- Figma plugin integration

## Questions?

Feel free to open an issue or reach out on Twitter [@yagizihlamur](https://twitter.com/yagizihlamur).

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
