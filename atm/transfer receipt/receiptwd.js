const tsreceipt = (accountholderName, balance, moneyDeduct, meansOfTransfer, transferedTo) => {
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
