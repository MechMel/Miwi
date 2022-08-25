/** @About A reactive, numeric variable. */
type Num<P extends R | RW = RW> = VarSubtype<P, number>;
const Num = Var.subtype((x: any): x is number => typeof x === `number`);

/** @About A numeric addition operator that automatically determines whether to be reative or not. */
const add = (...args: Num<R>[]) =>
  computed(
    () => args.reduce((x, y) => Var.toLit(x) + Var.toLit(y)) as number,
    args,
  );

/** @About A numeric subtraction operator that automatically determines whether to be reative or not. */
const sub = (x: Num<R>, y: Num<R>) =>
  computed(() => Var.toLit(x) - Var.toLit(y), [x, y]);

/** @About A numeric multiplication operator that automatically determines whether to be reative or not. */
const mul = (...args: Num<R>[]) =>
  computed(
    () => args.reduce((x, y) => Var.toLit(x) * Var.toLit(y)) as number,
    args,
  );

/** @About A numeric division operator that automatically determines whether to be reative or not. */
const div = (x: Num<R>, y: Num<R>) =>
  computed(() => Var.toLit(x) / Var.toLit(y), [x, y]);

/** @About A numeric modulus operator that automatically determines whether to be reative or not. */
const mod = (x: Num<R>, y: Num<R>) =>
  computed(() => Var.toLit(x) % Var.toLit(y), [x, y]);
