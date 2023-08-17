/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/

export * from './default-module.js';
export * from './dependency-injection.js';
export * from './service-registry.js';
export * from './services.js';
export * from './syntax-tree.js';
export * from './documentation/index.js';
export * from './generator/index.js';
export * from './grammar/index.js';
export * from './lsp/index.js';
export * from './parser/index.js';
export * from './references/index.js';
export * from './serializer/index.js';
export * from './utils/index.js';
export * from './validation/index.js';
export * from './workspace/index.js';

// Export the Langium Grammar AST definitions in the `GrammarAST` namespace
import * as GrammarAST from './grammar/generated/ast.js';
import type { Grammar } from './grammar/generated/ast.js';
export { Grammar, GrammarAST };
