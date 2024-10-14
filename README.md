# Custom Greet GitHub Action

This action prints a greeting message.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default is `"World"`.

## Outputs

### `time`

The time the greeting was printed.

## Example Usage

```yaml
uses: your-username/custom-github-action@v1
with:
  who-to-greet: 'Batman'
