// controllers/EthereumController.js
const { Web3 } = require("web3");

// Initialize web3 instance
const web3 = new Web3(process.env.ETH_KEY);

exports.getAccountBalance = async (req, res) => {
  try {
    const { address } = req.params;

    // Validate Ethereum address
    if (!web3.utils.isAddress(address)) {
      return res.status(400).send("Invalid Ethereum address");
    }

    // Retrieve account balance
    const balance = await web3.eth.getBalance(address);
    const formattedBalance = web3.utils.fromWei(balance, "ether");

    res.json({ balance: formattedBalance });
  } catch (error) {
    console.error("Error retrieving account balance:", error);
    res.status(500).send("An error occurred while retrieving account balance");
  }
};
