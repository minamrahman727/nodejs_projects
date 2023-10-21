const tsreceipt = (
    accountholderName: string,
    balance: number,
    moneyDeduct: number,
    meansOfTransfer: string,
    transferedTo: number
  ): string => {
    const msg = `
                Receipt
    *******************************
    
      A/C number: ${accountholderName}
      ----------------------
      Transfer Via: ${meansOfTransfer}
      ----------------------
      Transfer to: ${transferedTo}
      ----------------------
      Money Deduct: ${moneyDeduct}
      ----------------------
      Available Balance: ${balance}
        
    *******************************
    `;
  
    return msg;
  };
  
  export default tsreceipt;