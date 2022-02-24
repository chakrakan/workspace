### Generator Schema

```json
{
  "$schema": "http://json-schema.org/schema",
  "cli": "nx",
  "$id": "new-article",
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "The title of the blog post", // for the Nx generator UI in VScode
      "$default": {
        "$source": "argv",
        "index": 0
      },
      "x-prompt": "What's the title of your new post?" // enables prompting for the CLI tool
    },
    "author": {
      "type": "string",
      "description": "The name of the author",
      "x-prompt": "Who's the author?"
    },
    "excerpt": {
      "type": "string",
      "description": "An excerpt that summarizes the blog post in a single line"
    }
  },
  "required": ["title", "author"]
}
```
