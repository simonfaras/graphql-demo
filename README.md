
# Paket

```bash
> npm install --save graphql graphql-request
> npm install --save-dev  @graphql-codegen/cli  @graphql-codegen/schema-ast
```

# Filer
`codegen.yml` -> hämtar schemat från servern och skapar ett lokalt
`.graphqlconfig` -> Används av graphql-plugin i VSCode

# Script

```bash
# Använder codegen.yml för att skapa schema, se till att sätta env-variabler här ifall de behövs för Auth-headers
> npm run generateSchema
```

# Plugin
https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql