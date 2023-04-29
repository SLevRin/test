'use client'
import Web3 from 'web3'

import { Button } from '@/components/ui/button'

const web3 = new Web3('wss://mainnet.infura.io/ws/v3/d025d341e7a74177a524e1b7524a1795')

let account: ReturnType<typeof web3.eth.accounts.create>

const createAccount = () => {
  account = web3.eth.accounts.create('password')
  console.log(account)
}

const getBalance = async () => {
  const res = await web3.eth.getBalance(account.address)
  console.log(web3.utils.fromWei(res, 'ether'))
}

// const transaction = async () => {
//   // const res = await web3.eth.sendTransaction({
//   //   from: account.address,
//   //   to: account.address,
//   //   value: web3.utils.toWei('0.1'),
//   // })
//   const nonce = await web3.eth.getTransactionCount(account.address)
//   const gas = await web3.eth.getGasPrice()
//   const value = web3.utils.toWei('0.01')

//   const res = await web3.eth.sendSignedTransaction({
//     from: account.address,
//     to: '0x000',
//     nonce,
//     gasPrice,
//     value,
//     data: '0x000'
//   })
// }
export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-y-4">
      <div>web3</div>
      <Button onClick={createAccount}>Create account</Button>
      <Button onClick={getBalance}>Get Balance</Button>
    </div>
  )
}
