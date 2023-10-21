const receipt = (
    accountholderName: string,
    balance: number,
    moneyDeduct: number
  ): string => {
    const msg = `
                  Receipt
      *******************************
      
        A/C number: ${accountholderName}
        ----------------------
        Money Deduct: ${moneyDeduct}
        ----------------------
        Available Balance: ${balance}
          
      *******************************
      `;
  
    return msg;
  };
  
  export default receipt;
  