const SHIPWAY_PRICE = {
    'nekopos': 210,
    'compact': 450,
    'yamato60': 750,
    'yamato80': 850,
    'yamato100': 1050,
    'yamato120': 1200,
    'yamato140': 1450,
    'yamato160': 1700,
    'yamato170': 2100,
    'yamato180': 2100,
    'yamato200': 2500,
    'mini': 160,
    'post': 215,
    'packet': 230,
    'packetplus': 455,
    'yupack60': 750,
    'yupack80': 870,
    'yupack100': 1070,
    'yupack120': 1200,
    'yupack140': 1450,
    'yupack160': 1700,
    'yupack170': 1900
}

const calc = () => {
    const profit = Number(document.getElementById('profit').value);
    const shipway = document.getElementById('shipway').value;
    const price = (profit + SHIPWAY_PRICE[shipway]) * 10 / 9;
    document.getElementById('result').innerHTML = `販売価格が${price}円であれば${profit}円の利益が得れます。`;
}