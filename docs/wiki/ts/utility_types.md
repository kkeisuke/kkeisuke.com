# Utility Types チートシート

- 参考
  - [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

## readonly へ変換する

```ts
Readonly<T>
```

## optional を取り除く

```ts
Required<T>
```

## optional へ変換する

```ts
Partial<T>
```

## T から K を抽出する

```ts
Pick<T, K>
```

## T から K を取り除く

```ts
Omit<T, K>
```

## T から null と undefined を取り除く

```ts
NonNullable<T>
```

## 関数Tの返り値の型を抽出する

```ts
ReturnType<T>
```

## Tクラスのインスタンス型を返す

```ts
InstanceType<typeof T>
```

## T と U の共通部分を取り除く

```ts
Exclude<T, U>
```

## T と U の共通部分のみ抽出する

```ts
Extract<T, U>
```

## K に対して T 型を割り当てる

K に union types を使う場合に強力です。

```ts
Record<K,T>
```

## 関数の引数の型を抽出する

```ts
Parameters<関数型>
Parameters<typeof 関数>
```
