import { combineReducers } from 'redux';

const mvpReducer = () => {
    return [
        {
          "mvp_name": "GTB",
          "id": 1086,
          "map": "prt_sewb4",
          "respawn": "1h",
          "respawn_time": 3600000
        },
        {
          "mvp_name": "Osiris",
          "id": 1038,
          "map": "moc_pryd04",
          "respawn": "1h",
          "respawn_time": 3600000
        },
        {
          "mvp_name": "AmonRa",
          "id": 1511,
          "map": "moc_pryd06",
          "respawn": "1h",
          "respawn_time": 3600000
        },
        {
          "mvp_name": "Dracula",
          "id": 1389,
          "map": "gef_dun01",
          "respawn": "1h",
          "respawn_time": 3600000
        },
        {
          "mvp_name": "Moonlight Flower",
          "id": 1150,
          "map": "pay_dun04",
          "respawn": "1h",
          "respawn_time": 3600000
        },
        {
          "mvp_name": "Turtle General",
          "id": 1312,
          "map": "tur_dun04",
          "respawn": "1h",
          "respawn_time": 3600000
        },
        {
          "mvp_name": "Nightmare AmonRa",
          "id": 2362,
          "map": "moc_prydn2",
          "respawn": "1h",
          "respawn_time": 3600000
        },
        {
          "mvp_name": "Incantation Samurai",
          "id": 1492,
          "map": "ama_dun03",
          "respawn": "1h31",
          "respawn_time": 5460000
        },
        {
          "mvp_name": "Bacsojin",
          "id": 1630,
          "map": "lou_dun03",
          "respawn": "1h56",
          "respawn_time": 6960000
        },
        {
          "mvp_name": "Phreeoni",
          "id": 1159,
          "map": "moc_fild17",
          "respawn": "2h",
          "respawn_time": 7200000
        },
        {
          "mvp_name": "Mistress",
          "id": 1059,
          "map": "mjolnir_04",
          "respawn": "2h",
          "respawn_time": 7200000
        },
        {
          "mvp_name": "Boitata",
          "id": 2068,
          "map": "bra_dun02",
          "respawn": "2h",
          "respawn_time": 7200000
        },
        {
          "mvp_name": "Kiel D-01",
          "id": 1734,
          "map": "kh_dun02",
          "respawn": "2h",
          "respawn_time": 7200000
        },
        {
          "mvp_name": "Fallen Bishop Hibram",
          "id": 1871,
          "map": "abbey02",
          "respawn": "2h",
          "respawn_time": 7200000
        },
        {
          "mvp_name": "Maya",
          "id": 1147,
          "map": "anthell02",
          "respawn": "2h",
          "respawn_time": 7200000
        },
        {
          "mvp_name": "Eddga",
          "id": 1115,
          "map": "pay_fild10",
          "respawn": "2h",
          "respawn_time": 7200000
        },
        {
          "mvp_name": "RSX-0806",
          "id": 1623,
          "map": "ein_dun02",
          "respawn": "2h05",
          "respawn_time": 7500000
        },
        {
          "mvp_name": "Lord of the Dead",
          "id": 1373,
          "map": "Niflheim",
          "respawn": "2h13",
          "respawn_time": 7980000
        },
        {
          "mvp_name": "Tao Gunka",
          "id": 1583,
          "map": "beach_dun",
          "respawn": "5h",
          "respawn_time": 18000000
        },
        {
          "mvp_name": "Gloom Under the Night",
          "id": 1768,
          "map": "ra_san05",
          "respawn": "5h",
          "respawn_time": 18000000
        },
        {
          "mvp_name": "Lady Tanee",
          "id": 1688,
          "map": "ayo_dun02",
          "respawn": "7h",
          "respawn_time": 25200000
        },
        {
          "mvp_name": "Gioia",
          "id": 2251,
          "map": "gld2_ald",
          "respawn": "8h",
          "respawn_time": 28800000
        },
        {
          "mvp_name": "Valkyrie Randgris",
          "id": 1751,
          "map": "odin_tem03",
          "respawn": "8h",
          "respawn_time": 28800000
        },
        {
          "mvp_name": "Beelzebub",
          "id": 1873,
          "map": "abbey03",
          "respawn": "12h",
          "respawn_time": 43200000
        }
      ]
}

export default combineReducers({ 
    mvps: mvpReducer,
});