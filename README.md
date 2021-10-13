# eslint-config-software-improvement-group

[![Greenkeeper badge](https://badges.greenkeeper.io/atelljohannsmothers/eslint-config-software-improvement-group.svg)](https://greenkeeper.io/)

ESLint configuration for Software Improvement Group's (SIG) 10 guidelines for building maintainable software.

## Install

```
npm install eslint-config-software-improvement-group --save-dev
```

## Usage

For use with `@typescript-eslint`, extend `software-improvement-group/@typescript-eslint`. Recommended for new typescript code.

```json
{
  "extends": ["software-improvement-group/@typescript-eslint"]
}
```

To error on maintainability guidelines, extend `software-improvement-group`. Recommended for new code.

```json
{
  "extends": ["software-improvement-group"]
}
```

To warn on maintainability guidelines, extend `software-improvement-group/loose`. Recommended for legacy code.

```json
{
  "extends": ["software-improvement-group/loose"]
}
```
