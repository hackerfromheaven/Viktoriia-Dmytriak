// interface WalletBalance {
//   blockchain: string;
//   currency: string;
//   amount: number;
// }

// interface FormattedWalletBalance {
//   currency: string;
//   amount: number;
//   formatted: string;
// }

// interface Props extends BoxProps {}

// const getPriority = (blockchain: string): number => {

// ADDED STRING TYPE TO BLOCKCHAIN ​​FOR CHECKING AND AVOIDING ERROR

//     switch (blockchain) {
//       case 'Osmosis':
//         return 100
//       case 'Ethereum':
//         return 50
//       case 'Arbitrum':
//         return 30
//       case 'Zilliqa':
//         return 20
//       case 'Neo':
//         return 20
//       default:
//         return -99
//     }
//   }

// const WalletPage: React.FC<Props> = (props: Props) => {
//   const { children, ...rest } = props;
//   const balances = useWalletBalances();
//   const prices = usePrices();

//COMBINING SORTING AND FORMATTING OPERATIONS INTO A SINGLE HOOK useMemo() PREVENT THESE OPERATIONS FROM BEING REPEATED IF THE DATA HAS NOT CHANGED. 
//UseMemo() REMEMBERS THE RESULT OF THE CALCULATION AND RETURN IT IF THE DEPENDENCIES HAVE NOT CHANGED. 
//THIS HELPS AVOID UNNECESSARY RECALCULATIONS AND IMPROVES PERFORMANCE.

//   const { sortedBalances, formattedBalances } = useMemo(() => {
//     const filtered = balances.filter((balance: WalletBalance) => {
//       const balancePriority = getPriority(balance.blockchain);
//       return balancePriority > -99 && balance.amount > 0;
//     });

//     const sorted = filtered.sort((lhs: WalletBalance, rhs: WalletBalance) =>
//       getPriority(rhs.blockchain) - getPriority(lhs.blockchain)
//     );

//     const formatted = sorted.map((balance: WalletBalance) => ({
//       ...balance,
//       formatted: balance.amount.toFixed(2)

//REDUCE THE NUMBER TO HUNDREDTHS

//     }));

//     return { sortedBalances: sorted, formattedBalances: formatted };
//   }, [balances]);

// WE ONLY INCLUDE DEPENDENCY BALANCES TO AVOID RECALCULATION

//   const rows = formattedBalances.map((balance: FormattedWalletBalance, index: number) => {
//     const usdValue = prices[balance.currency] * balance.amount;
//     return (
//       <WalletRow
//         className={classes.row}
//         key={index}
//         amount={balance.amount}
//         usdValue={usdValue}
//         formattedAmount={balance.formatted}
//       />
//     );
//   });

//   return (
//     <div {...rest}>
//       {rows}
//     </div>
//   );
// }

// export default WalletPage;

// ALL COMMENTS:

//1
// ADDED STRING TYPE TO BLOCKCHAIN ​​FOR CHECKING AND AVOIDING ERROR

//2
//COMBINING SORTING AND FORMATTING OPERATIONS INTO A SINGLE HOOK useMemo() PREVENT THESE OPERATIONS FROM BEING REPEATED IF THE DATA HAS NOT CHANGED. 
//UseMemo() REMEMBERS THE RESULT OF THE CALCULATION AND RETURN IT IF THE DEPENDENCIES HAVE NOT CHANGED. 
//THIS HELPS AVOID UNNECESSARY RECALCULATIONS AND IMPROVES PERFORMANCE.

//3
//REDUCE THE NUMBER TO HUNDREDTHS

//4
//WE ONLY INCLUDE DEPENDENCY BALANCES TO AVOID RECALCULATION