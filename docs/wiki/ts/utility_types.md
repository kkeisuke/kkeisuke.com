# Utility Types チートシート

## readonly へ変換する

https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlyt

```ts
Readonly<T>
```

## optional を取り除く

https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredt

```ts
Required<T>
```

## optional へ変換する

https://www.typescriptlang.org/docs/handbook/utility-types.html#partialt

```ts
Partial<T>
```

## T から K を抽出する

https://www.typescriptlang.org/docs/handbook/utility-types.html#picktk

```ts
Pick<T, K>
```

## T から K を取り除く

https://www.typescriptlang.org/docs/handbook/utility-types.html#omittk

```ts
Omit<T, K>
```

## T から null と undefined を取り除く

https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullablet

```ts
NonNullable<T>
```

## 関数Tの返り値の型を抽出する

https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypet

```ts
ReturnType<T>
```

## Tクラスのインスタンス型を返す

https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypet

```ts
InstanceType<typeof T>
```

## T と U の共通部分を取り除く

https://www.typescriptlang.org/docs/handbook/utility-types.html#excludetu

```ts
Exclude<T, U>
```

## T と U の共通部分のみ抽出する

https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttu

```ts
Extract<T, U>
```

## K に対して T 型を割り当てる

https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkt

K に union types を使う場合に強力です。

```ts
Record<K,T>
```

## 関数の引数の型を抽出する

https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype

```ts
Parameters<関数型>
Parameters<typeof 関数>
```
