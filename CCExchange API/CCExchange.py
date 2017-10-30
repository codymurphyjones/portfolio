
import time
import requests
import hmac
import hashlib
import urllib.parse

BUY_ORDERBOOK = 'buy'
SELL_ORDERBOOK = 'sell'
BOTH_ORDERBOOK = 'both'

PUBLIC_SET = ['getmarkets', 'getfullorderbook', 'getmarketsummaries', 'getorderbook',
              'getmarkethistory', 'getfullmarkethistory', 'getbalancedistribution']

MARKET_SET = ['getopenorders', 'cancel', 'sellmarket', 'selllimit', 'buymarket', 'buylimit']

ACCOUNT_SET = ['getbalances', 'getbalance', 'getdepositaddress', 'withdraw']


class CCExchange(object):
    """
    Used for requesting Bittrex with API key and API secret
    """
    def __init__(self, api_key, api_secret):
        self.api_key = str(api_key) if api_key is not None else ''
        self.api_secret = str(api_secret) if api_secret is not None else ''
        self.public_set = set(PUBLIC_SET)
        self.account_set = set(ACCOUNT_SET)
        self.market_set = set(MARKET_SET)

    def api_query(self, method, options=None):
        """
        Queries Bittrex with given method and options
        :param method: Query method for getting info
        :type method: str
        :param options: Extra options for query
        :type options: dict
        :return: JSON response from Bittrex
        :rtype : dict
        """
        if not options:
            options = {}
        nonce = str(int(time.time() * 1000))
        base_url = 'https://c-cex.com/t/api{}.html?a='
        request_url = ''
        #print((base_url % 'public'))
        if method in self.public_set:
            request_url = base_url.format("_pub") + method + '&'
        elif method in self.market_set:
            request_url = base_url.format("")  + method + '&apikey=' + self.api_key + "&nonce=" + nonce + '&'
        elif method in self.account_set:
            request_url = base_url.format("")  + method + '&apikey=' + self.api_key + "&nonce=" + nonce + '&'
        elif method == 'prices':
            base_url = 'https://c-cex.com/t/'
            request_url = base_url.format("") + method + '.json'


        request_url += urllib.parse.urlencode(options)

        signature = hmac.new(bytearray(self.api_secret, "ASCII"), bytearray(request_url, "ASCII"), hashlib.sha512).hexdigest()
        print(request_url)

        headers = {"apisign": signature}

        ret = requests.get(request_url, headers=headers)

        value = ''
        try:
            value = ret.json()
        except Exception:
            if ret.content == b'':
                value = ''
            else:
                value = {"result": {"NoAccess": True}}

        return value

    def getmarkets(self):
        """
        Used to get the open and available trading markets
        at CCEx along with other meta data.
        :return: Available market info in JSON
        :rtype : dict
        """
        return self.api_query('getmarkets')

    def getprices(self):
        """
        Used to get the open and available trading markets
        at CCEx along with other meta data.
        :return: Available market info in JSON
        :rtype : dict
        """
        return self.api_query('prices')

    def getorderbook(self,market,type,depth=50):
        """
        Used to get the open and available trading markets
        at CCEx along with other meta data.
        :param depth:
        :return: Available market info in JSON
        :rtype : dict
        """

        if depth > 99:
            depth = 100
        print("test")
        return self.api_query('getorderbook', {'market':market,'type':type,'depth': depth})

    def getfullorderbook(self, depth=50):
        """
        Used to get the open and available trading markets
        at CCEx along with other meta data.
        :param depth:
        """
        if depth > 99:
            depth = 100

        return self.api_query('getfullorderbook', {'depth': depth})

    def getmarketsummaries(self):
        """
        Used to retrieve the last 24 hour summary of all active markets
        :return: Available summary in JSON
        :rtype : dict
        """
        return self.api_query('getmarketsummaries')

    def getmarkethistory(self,market,count=50):
        """
        Latest trades that have occured for a specific market
        :param market: Market name (ex: USD-BTC)
        :param count: Number of entires to return. Range 1-100
        :return: JSON
        :rtype : dict
        """
        if count > 99:
            count = 100

        return self.api_query('getmarkethistory', {'market':market, 'count': count})

    def getbalancedistribution(self,currencyname):
        """
        Exchanges wallet balance distribution for specific currency
        :param currencyname: name of currency (ex: GRC)
        :return:  JSON
        :rtype: dict
        """

        return self.api_query('getbalancedistribution', {'currencyname': currencyname})

    def buylimit(self,market,quantity,rate):
        """
        Place a buy limit order in a specific market. Make sure you have the proper permissions set on your API keys.
        :param market: market name (ex USD-BTC)
        :param quantity: Amount to purchase
        :param rate: Rate at which to place the order
        :return:
        """
        return self.api_query('buylimit',{'market': market, 'quantity':quantity,'rate':rate})

    def selllimit(self,market,quantity,rate):
        """
        Place a sell limit order in a specific market. Make sure you have the proper permissions set on your API keys.
        :param market: market name (ex USD-BTC)
        :param quantity: Amount to purchase
        :param rate: Rate at which to place the order
        :return:
        """
        return self.api_query('selllimit',{'market': market, 'quantity':quantity,'rate':rate})

    def cancel(self,uuid):
        """
        Cancel a buy or sell order
        :param uuid: uuid of buy or sell
        :return: JSON
        :rtype : dict
        """

        return self.api_query('cancel', {'uuid': uuid})

    def getbalance(self,currency):
        """
        Retrieve the balance from your account for a specific currency
        :param currency: CUrrency name (ex: BTC)
        :return: JSON
        """
        return self.api_query('getbalance',{'currency': currency})

    def getbalances(self):
        """
        Retrieve the balance from your account for a specific currency
        :param currency: Currency name (ex: BTC)
        :return: JSON
        """
        return self.api_query('getbalances')

    def getorder(self,uuid):
        """
        Retrieve an order by uuid
        :param uuid: uuid of buy or sell
        :return: JSON
        :rtype : dict
        """
        return self.api_query('getorder', {'uuid': uuid})

    def getopenorders(self,market):
        """
        Get all orders that you currently have opened. A specific market can be requested
        :param market:
        :return:
        """
        return self.api_query('getopenorders',{'market':market})

    def getallorderhistory(self):
        """
        Get all orders that you currently have opened. A specific market can be requested
        :return:
        """

        return self.api_query('getorderhistory')

    def getorderhistory(self, market):
        """
        Get all orders that you currently have opened. A specific market can be requested
        :param market:
        :return:
        """

        return self.api_query('getorderhistory', {'market': market})

    def getorderhistory(self, market, count):
        """
        Get all orders that you currently have opened. A specific market can be requested
        :param market:
        :return:
        """

        return self.api_query('getorderhistory', {'market': market, 'count': count})

    def mytrades(self,marketid):
        """
        Retrieve detailed trading history
        :param marketid:
        :return:
        """

        return self.api_query('mytrades',{'marketid':marketid})

