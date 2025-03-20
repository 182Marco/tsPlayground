const companyDetailsObjReq = (simbol = 'twtr') => ({
  method: 'GET',
  url: 'https://myallies-breaking-news-v1.p.rapidapi.com/GetCompanyDetailsBySymbol',
  params: { symbol: simbol },
  headers: {
    'x-rapidapi-host': 'myallies-breaking-news-v1.p.rapidapi.com',
    'x-rapidapi-key': '7d7ff518damsh637aa07aa764686p188b8fjsn133a70550d88',
  },
});

const companyNews = {
  method: 'GET',
  url: 'https://myallies-breaking-news-v1.p.rapidapi.com/news/cnn',
  headers: {
    'x-rapidapi-host': 'myallies-breaking-news-v1.p.rapidapi.com',
    'x-rapidapi-key': '7d7ff518damsh637aa07aa764686p188b8fjsn133a70550d88',
  },
};

const topNews = {
  method: 'GET',
  url: 'https://myallies-breaking-news-v1.p.rapidapi.com/GetTopNews',
  headers: {
    'x-rapidapi-host': 'myallies-breaking-news-v1.p.rapidapi.com',
    'x-rapidapi-key': '7d7ff518damsh637aa07aa764686p188b8fjsn133a70550d88',
  },
};

const objPrarmsArrayForCalls = [companyDetailsObjReq(), companyNews, topNews];

export { companyDetailsObjReq, objPrarmsArrayForCalls };
