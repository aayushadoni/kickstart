import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xDD6a71808f841630C711DDCc3E72ae8eD6d09D30'
);

export default instance;
