# Get MSBuild project version

GitHub Action to get MSBuild project (e.g. *.csproj*) version from the project file.

## Inputs
- `file` - path to the project file (string, required)
- `validate-all` - validate all version parts (boolean, optional, default: **false**)
- `validate-version-prefix` - validate version prefix (boolean, optional, default: **false**)
- `validate-version-suffix` - validate version suffix (boolean, optional, default: **false**)
- `validate-version` - validate version (boolean, optional, default: **false**)
- `validate-assembly-version` - validate assembly version (boolean, optional, default: **false**)
- `validate-file-version` - validate file version (boolean, optional, default: **false**)
- `validate-package-version` - validate package version (boolean, optional, default: **false**)

## Outputs
- `version-prefix` - version prefix (string)
- `version-suffix` - version suffix (string)
- `version` - version (string)
- `assembly-version` - assembly version (string)
- `file-version` - file version (string)
- `informational-version` - informational version (string)
- `package-version` - package version (string)

## Usage example

```yml
steps:
  - name: Checkout code
    uses: actions/checkout@v4
  - name: Get MSBuild project version
    uses: dae-ne/get-msbuild-project-version@v1
    id: project-version
    with:
      file: 'path/to/your/project.csproj'
      validate-all: true
  - run: echo ${{ steps.project-version.outputs.version }}
```

## License

This project is licensed under the [MIT](LICENSE) license.
