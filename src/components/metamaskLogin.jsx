import React, { Component } from "react";
import Web3 from "web3";

class MetamaskLogin extends Component {
  state = {};

  setIsConnected = (value) => {
    console.log("metamask set value to ", value);
  };

  handleConnectMetamask = () => {
    console.log("clicked ConnectMetamask button");
    //this.requestPermissions();
    //this.check_permissions();
    this.connectMetamask();
  };

  check_permissions = () => {
    this.detectCurrentProvider()
      .request({ method: "wallet_getPermissions" })
      .then((permissions) => {
        if (permissions.length === 0) {
          console.log("request permissions");
          //this.requestPermissions();
        }
      })
      .catch((error) => {
        if (error.code === 4001) {
          // EIP-1193 userRejectedRequest error
          console.log("Please connect to MetaMask.");
        } else {
          console.error(error);
        }
      });
  };

  requestPermissions = () => {
    this.detectCurrentProvider()
      .request({
        method: "wallet_requestPermissions",
        params: [{ eth_accounts: {} }],
      })
      .then((permissions) => {
        const accountsPermission = permissions.find(
          (permission) => permission.parentCapability === "eth_accounts"
        );
        if (accountsPermission) {
          console.log("eth_accounts permission successfully requested!");
        }
      })
      .catch((error) => {
        if (error.code === 4001) {
          // EIP-1193 userRejectedRequest error
          console.log("Permissions needed to continue.");
        } else {
          console.error(error);
        }
      });
  };

  detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
      console.log("oroviders: ", provider);
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
    console.log("provide", provider);
    return provider;
  };

  saveUserInfo = (ethBalance, account, chainId) => {
    const userAccount = {
      account: account,
      balance: ethBalance,
      connectionid: chainId,
    };
    window.localStorage.setItem("userAccount", JSON.stringify(userAccount)); //user persisted data
    const userData = JSON.parse(localStorage.getItem("userAccount"));
    console.log(userData);

    //this.setUserInfo(userData);
    //this.setIsConnected(true);
  };

  handleAccoundsChange = async (currentProvider) => {
    console.log("handleAccoundsChange");
    const web3 = new Web3(currentProvider);
    const userAccount = await web3.eth.getAccounts();
    const chainId = await web3.eth.getChainId();
    const account = userAccount[0];
    let ethBalance = await web3.eth.getBalance(account); // Get wallet balance
    ethBalance = web3.utils.fromWei(ethBalance, "ether"); //Convert balance to wei
    this.saveUserInfo(ethBalance, account, chainId);
    if (userAccount.length === 0) {
      console.log("Please connect to meta mask");
    }
  };
  connectMetamask = async () => {
    const currentProvider = this.detectCurrentProvider();
    if (currentProvider) {
      if (currentProvider !== window.ethereum) {
        console.log(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }

      await currentProvider
        .request({ method: "eth_requestAccounts" })
        .then(() => this.handleAccoundsChange(currentProvider))
        .catch((error) => {
          if (error.code === 4001) {
            // EIP-1193 userRejectedRequest error
            console.log("Please connect to MetaMask.");
          } else {
            //console.error(error);
          }
        });
      //     const web3 = new Web3(currentProvider);
      //     const userAccount = await web3.eth.getAccounts();
      //     const chainId = await web3.eth.getChainId();
      //     console.log(userAccount);
      //     const account = userAccount[0];
      //     let ethBalance = await web3.eth.getBalance(account); // Get wallet balance
      //     console.log(ethBalance);
      //     ethBalance = web3.utils.fromWei(ethBalance, "ether"); //Convert balance to wei
      //     this.saveUserInfo(ethBalance, account, chainId);
      //     if (userAccount.length === 0) {
      //       console.log("Please connect to meta mask");
      //     }
      //   }
      // } catch (err) {
      //   console.log(
      //     "There was an error fetching your accounts. Make sure your Ethereum client is configured correctly."
      //   );
    }
  };

  onDisconnect = () => {
    window.localStorage.removeItem("userAccount");
    // setUserInfo({});
    // setIsConnected(false);
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleConnectMetamask}>Connect Metamask</button>
        <button onClick={this.onDisconnect}>DIsconnet Metamask</button>
      </React.Fragment>
    );
  }
}

export default MetamaskLogin;
