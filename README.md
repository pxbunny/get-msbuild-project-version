# Get MSBuild project version

## Inputs
- `path` - path to the project file (string, required)
- `validate` - validate version format (boolean, optional, default: true)

## Outputs
- `version` - version of the project

## Usage

```yml
steps:
  - uses: actions/checkout@v3
  - name: Get MSBuild project version
    uses: dae-ne/get-msbuild-project-version@v1
    id: project-version
    with:
      path: 'path/to/your/project.csproj'
  - run: echo ${{ steps.project-version.outputs.version }}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
