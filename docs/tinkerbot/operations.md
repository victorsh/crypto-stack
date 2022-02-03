# Trading Operations

CASHOUT
- Loop until no Symbol > $MIN_TRN_AMNT
  - For each Exchange
    - Fetch Balance
      - For each Balance > $MIN_TRN_AMNT && !(USD || USDC || )
        - Convert to USD
        - If no USD market pair
          - Convert to Symbol with USD market pair
          - Convert to USD
