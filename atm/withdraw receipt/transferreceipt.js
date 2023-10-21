const receipt = (accountholderName, balance, moneyDeduct) => {
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
