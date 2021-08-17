import BigNumber from 'bignumber.js';

const { EXTERNAL_HOSTNAME: ENV_HOSTNAME } = process.env;

export const { IS_TESTNET } = process.env;

export const TEST_MODE = process.env.NODE_ENV !== 'production' || process.env.CI;

export const BONUS_ADDRESSES = IS_TESTNET
  ? ['0xC75c0b2a92fd823A05C7AE3949ad6f1aB20Dd37E', '0x1cf94c2bbA216e3f1ecff7762af47844C43d3FdA', '0x6A9e2dE467097B4D14F44944aC2a49A750Fc93b8']
  : ['0x65b8E5D9d95e707349789E42fa2f88EE5B20B072', '0x1cf94c2bbA216e3f1ecff7762af47844C43d3FdA', '0x6A9e2dE467097B4D14F44944aC2a49A750Fc93b8'];

export const ETHERSCAN_HOST = IS_TESTNET ? 'https://rinkeby.etherscan.io' : 'https://etherscan.io';

export const INFURA_HOST = IS_TESTNET ? 'https://rinkeby.infura.io/v3/9a6771595426445cb247e83d4ad85645' : 'https://mainnet.infura.io/v3/9a6771595426445cb247e83d4ad85645';

export const AUTHCORE_API_HOST = IS_TESTNET ? 'https://likecoin-integration-test.authcore.io' : 'https://authcore.like.co';

export const ETH_NETWORK_NAME = IS_TESTNET ? 'rinkeby' : 'mainnet';

export const ETH_MIGRATION_MIN_LIKECOIN_AMOUNT = '1000000000000000000';

export const BIGDIPPER_HOST = IS_TESTNET ? 'https://taipei.likecoin.bigdipper.live' : 'https://likecoin.bigdipper.live';

export const COSMOS_WALLET_PREFIX = "m/44'/118'/0'/0";

export const COSMOS_CHAIN_ID = IS_TESTNET ? 'likecoin-testnet-taipei-2' : 'likecoin-chain-sheungwan';

export const BASIC_TRANSFER_GAS = '44000';

export const ISCN_TESTNET_CHAIN_ID = 'iscn-dev-chain';

export const COSMOS_DENOM = 'nanolike';

export const CONFIRMATION_NEEDED = 6;

export const MIN_USER_ID_LENGTH = 7;
export const MAX_USER_ID_LENGTH = 20;

export const LIKECOIN_ID_REGEX_STRING = '[a-z0-9-_]{7,20}';
export const LIKECOIN_ID_REGEX = new RegExp(LIKECOIN_ID_REGEX_STRING);
export const REGISTER_EMAIL_REGEX_STRING = IS_TESTNET ? '.*' : '^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
export const REGISTER_EMAIL_REGEX = new RegExp(REGISTER_EMAIL_REGEX_STRING);
export const EMAIL_REGEX = '^[a-zA-Z0-9.!#$%&\'*/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$';
export const W3C_EMAIL_REGEX = IS_TESTNET ? '.*' : EMAIL_REGEX;

/* TEMP: reformat medium referrer into medium post */
export const MEDIUM_REGEX = /^(?:https?:\/\/)?[^/]*\/media\/[a-zA-Z0-9_]+(?:\?postId=([a-zA-Z0-9_]+))?/;

export const PUBSUB_TOPIC_MISC = 'misc';

export const LOGIN_MESSAGE = 'Login - Reinventing the Like';

export const ONE_LIKE = new BigNumber(10).pow(18);

const whiteList = [
  'oice.com',
  'oicetest.lakoo.com',
  'like.co',
  'rinkeby.like.co',
  'button.like.co',
  'button.rinkeby.like.co',
];
if (IS_TESTNET) whiteList.push('localhost');

export const REDIRECT_WHITE_LIST = whiteList;

export const REDIRECT_NAME_WHITE_LIST = ['in-bonus', 'in-tokensale', 'in-bundle', 'in-settings'];

export const TRANSACTION_QUERY_LIMIT = 10;

export const ETH_TO_LIKECOIN_RATIO = 40000;
export const FINAL_TOKENSALE_ETH_VALUE = 7562.26;
export const FINAL_TOKENSALE_PERCENTAGE = 180;

export const BONUS_LOCK_UNTIL_DATE = 1540267200000;

export const TRUST_URL = 'https://links.trustwalletapp.com/a/key_live_lfvIpVeI9TFWxPCqwU8rZnogFqhnzs4D?&event=openURL&url=';

export const LIKER_LAND_APP_LINK = {
  ios: 'https://apps.apple.com/app/likerland/id1248232355',
  android: 'https://play.google.com/store/apps/details?id=com.oice',
};

export const EXTRA_EMAIL_BLACLIST = [
  'tutye.com',
];

export const PURCHASE_LIKE_URL = 'https://app.liquid.com/exchange/LIKEUSDT';
export const WORDPRESS_PLUGIN_URL = 'https://wordpress.org/plugins/likecoin/';
export const OICE_URL = 'https://oice.com';

export const EXTERNAL_HOSTNAME = ENV_HOSTNAME || (IS_TESTNET ? 'rinkeby.like.co' : 'like.co');

export const EXTERNAL_URL = `${TEST_MODE ? 'http://' : 'https://'}${EXTERNAL_HOSTNAME}`;

export const LIKER_LAND_URL = `https://${(IS_TESTNET ? 'rinkeby.' : '')}liker.land`;

export const SOCIAL_MEDIA_LIST = [
  {
    id: 'likecoin',
    tier: 0,
  },
  {
    id: 'facebook',
    tier: 1,
  },
  {
    id: 'flickr',
    tier: 1,
  },
  {
    id: 'medium',
    tier: 1,
  },
  {
    id: 'twitter',
    tier: 1,
  },
];

export const LOGIN_CONNECTION_LIST = [
];

export const OTHER_CONNECTION_LIST = [
  'medium',
  'flickr',
];

export const IS_LOGIN_SOCIAL = new Set(LOGIN_CONNECTION_LIST);

export const LINK_ICON_TYPES = ['profile', 'blog', 'photo', 'mail', 'contact', 'link'];

export const DISPLAY_SOCIAL_MEDIA_OPTIONS = [
  'all', // default
  'wp',
  'medium',
];

export const SUPPORTED_AVATER_TYPE = new Set([
  'jpg',
  'png',
  'gif',
  'webp',
  'tif',
  'bmp',
]);

export const AVATAR_DEFAULT_PATH = 'https://static.like.co/likecoin_de-portrait.jpg';

export const LIKE_BUTTON_POST_MESSAGE_TARGET_ORIGIN = IS_TESTNET ? '*' : 'https://button.like.co';

export const WALLET_NOTICE_EXPIRY_INTERVAL = IS_TESTNET ? 300 : 604800; // In second

export const LIKE_CO_PLATFORMS = [
  {
    name: 'telegram',
    url: 'https://t.me/likecoin',
  },
  {
    name: 'matters',
    url: 'https://matters.news/@likecoin',
  },
  {
    name: 'medium',
    url: 'https://medium.com/likecoin',
  },
  {
    name: 'github',
    url: 'https://github.com/likecoin',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/likecoin',
  },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/c/LikeCoin',
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/Liker.Land',
  },
];

export const DISCORD_INVITE_URL = 'https://discord.gg/W4DQ6peZZZ';

export const LIQUID_QEX_PUPLIC_API_KEY = IS_TESTNET
  ? '06c5b428-e5b3-4365-840a-4f0d10f2bbba'
  : 'pk_fb318eeb-75b1-4b74-8f19-4f445a7eff72';

export const IS_CHAIN_UPGRADING = true;
