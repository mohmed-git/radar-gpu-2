// GPU RADAR — Shared Data Layer  v3.1
// آخر تحديث يدوي: ٧‏/٤‏/٢٠٢٦

const MONTHS_AR = ['أبر','مايو','يون','يول','أغس','سبت','أكت','نوف','ديس','يناير','فبر','مارس'];

const GPU_DATA = [
  { id:'rtx5090', name:'RTX 5090', brand:'NVIDIA', type:'GPU', tier:'flagship', price:3799, prev:3830, high52:5264, low52:2807, color:'#76B900', series:[4760,4790,4570,4490,4495,4425,4175,4210,3980,3785,3830,3860] },
  { id:'rtx5080', name:'RTX 5080', brand:'NVIDIA', type:'GPU', tier:'flagship', price:1364, prev:1299, high52:1754, low52:935, color:'#76B900', series:[1680,1650,1555,1540,1525,1450,1420,1440,1335,1370,1315,1310] },
  { id:'rtx5070ti', name:'RTX 5070 Ti', brand:'NVIDIA', type:'GPU', tier:'high-end', price:1035, prev:1015, high52:1362, low52:726, color:'#76B900', series:[1265,1225,1185,1185,1160,1115,1100,1055,1035,995,1015,1035] },
  { id:'rtx5070', name:'RTX 5070', brand:'NVIDIA', type:'GPU', tier:'high-end', price:649, prev:640, high52:876, low52:467, color:'#76B900', series:[815,780,775,750,725,715,695,695,670,645,640,630] },
  { id:'rtx5060ti', name:'RTX 5060 Ti 16GB', brand:'NVIDIA', type:'GPU', tier:'mid-range', price:500, prev:514, high52:694, low52:370, color:'#76B900', series:[660,645,630,620,590,585,570,555,550,540,505,510] },
  { id:'rtx5060ti8', name:'RTX 5060 Ti 8GB', brand:'NVIDIA', type:'GPU', tier:'mid-range', price:389, prev:405, high52:539, low52:287, color:'#76B900', series:[490,480,475,470,460,450,430,410,410,405,405,400] },
  { id:'rtx5060', name:'RTX 5060', brand:'NVIDIA', type:'GPU', tier:'budget', price:340, prev:345, high52:471, low52:251, color:'#76B900', series:[445,430,415,410,390,395,375,365,355,345,345,340] },
  { id:'rtx5050', name:'RTX 5050', brand:'NVIDIA', type:'GPU', tier:'budget', price:295, prev:289, high52:390, low52:208, color:'#76B900', series:[365,350,350,335,345,320,315,310,310,290,285,295] },
  { id:'rtx4090', name:'RTX 4090', brand:'NVIDIA', type:'GPU', tier:'flagship', price:3745, prev:3180, high52:4319, low52:2303, color:'#76B900', series:[3945,3955,3850,3660,3690,3605,3380,3295,3200,3275,3180,3225] },
  { id:'rtx4080s', name:'RTX 4080 Super', brand:'NVIDIA', type:'GPU', tier:'flagship', price:1547, prev:1510, high52:2022, low52:1079, color:'#76B900', series:[1875,1850,1775,1710,1705,1660,1645,1600,1520,1475,1510,1520] },
  { id:'rtx4080', name:'RTX 4080', brand:'NVIDIA', type:'GPU', tier:'flagship', price:1349, prev:1520, high52:2024, low52:1079, color:'#76B900', series:[1900,1825,1765,1725,1710,1695,1595,1610,1575,1520,1520,1525] },
  { id:'rtx4070tis', name:'RTX 4070 Ti Super', brand:'NVIDIA', type:'GPU', tier:'high-end', price:943, prev:1465, high52:1978, low52:1055, color:'#76B900', series:[1835,1800,1780,1785,1690,1635,1580,1545,1550,1530,1475,1475] },
  { id:'rtx4070ti', name:'RTX 4070 Ti', brand:'NVIDIA', type:'GPU', tier:'high-end', price:925, prev:1220, high52:1619, low52:863, color:'#76B900', series:[1520,1430,1460,1425,1365,1350,1285,1270,1260,1185,1220,1200] },
  { id:'rtx4070s', name:'RTX 4070 Super', brand:'NVIDIA', type:'GPU', tier:'mid-range', price:745, prev:900, high52:1212, low52:647, color:'#76B900', series:[1135,1090,1075,1065,1040,995,950,930,900,905,900,910] },
  { id:'rtx4070', name:'RTX 4070', brand:'NVIDIA', type:'GPU', tier:'mid-range', price:657, prev:700, high52:964, low52:514, color:'#76B900', series:[880,875,850,820,795,800,760,775,735,705,700,705] },
  { id:'rtx4060ti16', name:'RTX 4060 Ti 16GB', brand:'NVIDIA', type:'GPU', tier:'mid-range', price:700, prev:447, high52:603, low52:322, color:'#76B900', series:[560,560,540,545,525,505,495,485,465,455,435,440] },
  { id:'rtx4060ti', name:'RTX 4060 Ti', brand:'NVIDIA', type:'GPU', tier:'mid-range', price:500, prev:395, high52:533, low52:284, color:'#76B900', series:[505,485,490,460,460,455,445,425,410,405,400,405] },
  { id:'rtx4060', name:'RTX 4060', brand:'NVIDIA', type:'GPU', tier:'budget', price:419, prev:424, high52:572, low52:305, color:'#76B900', series:[535,515,505,495,480,485,475,450,455,440,420,415] },
  { id:'rtx3090ti', name:'RTX 3090 Ti', brand:'NVIDIA', type:'GPU', tier:'flagship', price:1998, prev:1020, high52:1349, low52:719, color:'#76B900', series:[1265,1215,1170,1135,1145,1110,1055,1035,1030,995,1020,1040] },
  { id:'rtx3090', name:'RTX 3090', brand:'NVIDIA', type:'GPU', tier:'flagship', price:1510, prev:855, high52:1146, low52:611, color:'#76B900', series:[1080,1030,1000,965,945,965,920,910,890,855,855,845] },
  { id:'rtx3080ti', name:'RTX 3080 Ti', brand:'NVIDIA', type:'GPU', tier:'high-end', price:1295, prev:750, high52:1011, low52:539, color:'#76B900', series:[930,890,885,875,840,825,820,785,765,745,750,760] },
  { id:'rtx3080', name:'RTX 3080 12GB', brand:'NVIDIA', type:'GPU', tier:'high-end', price:1095, prev:785, high52:1079, low52:575, color:'#76B900', series:[975,975,935,925,910,890,875,855,825,820,785,780] },
  { id:'rtx3070ti', name:'RTX 3070 Ti', brand:'NVIDIA', type:'GPU', tier:'mid-range', price:429, prev:490, high52:674, low52:359, color:'#76B900', series:[620,615,590,585,575,540,540,525,500,510,490,495] },
  { id:'rtx3070', name:'RTX 3070', brand:'NVIDIA', type:'GPU', tier:'mid-range', price:325, prev:450, high52:606, low52:323, color:'#76B900', series:[555,550,530,515,510,510,490,465,475,450,450,455] },
  { id:'rtx3060ti', name:'RTX 3060 Ti', brand:'NVIDIA', type:'GPU', tier:'mid-range', price:460, prev:400, high52:539, low52:287, color:'#76B900', series:[500,485,465,460,460,450,420,420,400,410,400,395] },
  { id:'rtx3060', name:'RTX 3060 12GB', brand:'NVIDIA', type:'GPU', tier:'budget', price:419, prev:295, high52:404, low52:215, color:'#76B900', series:[370,365,365,345,350,330,320,310,300,305,295,290] },
  { id:'rx9070xt', name:'RX 9070 XT', brand:'AMD', type:'GPU', tier:'high-end', price:729, prev:715, high52:971, low52:518, color:'#ED1C24', series:[895,855,855,835,815,810,760,745,745,700,715,705] },
  { id:'rx9070', name:'RX 9070', brand:'AMD', type:'GPU', tier:'high-end', price:625, prev:615, high52:836, low52:446, color:'#ED1C24', series:[765,765,730,735,710,695,650,650,650,630,615,625] },
  { id:'rx9060xt16', name:'RX 9060 XT 16GB', brand:'AMD', type:'GPU', tier:'mid-range', price:439, prev:425, high52:579, low52:309, color:'#ED1C24', series:[525,520,515,510,495,485,470,465,445,440,425,420] },
  { id:'rx9060xt8', name:'RX 9060 XT 8GB', brand:'AMD', type:'GPU', tier:'mid-range', price:345, prev:349, high52:471, low52:251, color:'#ED1C24', series:[435,440,435,415,415,405,390,375,360,350,355,345] },
  { id:'rx7900xtx', name:'RX 7900 XTX', brand:'AMD', type:'GPU', tier:'flagship', price:1099, prev:1155, high52:1578, low52:842, color:'#ED1C24', series:[1460,1415,1375,1325,1305,1275,1240,1235,1205,1160,1155,1145] },
  { id:'rx7900xt', name:'RX 7900 XT', brand:'AMD', type:'GPU', tier:'high-end', price:689, prev:660, high52:903, low52:482, color:'#ED1C24', series:[830,825,815,780,745,755,735,695,700,680,660,655] },
  { id:'rx7900gre', name:'RX 7900 GRE', brand:'AMD', type:'GPU', tier:'high-end', price:550, prev:555, high52:741, low52:395, color:'#ED1C24', series:[690,670,645,630,615,625,605,585,575,535,555,550] },
  { id:'rx7800xt', name:'RX 7800 XT', brand:'AMD', type:'GPU', tier:'mid-range', price:500, prev:499, high52:674, low52:359, color:'#ED1C24', series:[620,630,605,605,585,575,560,535,535,510,485,510] },
  { id:'rx7700xt', name:'RX 7700 XT', brand:'AMD', type:'GPU', tier:'mid-range', price:379, prev:405, high52:539, low52:287, color:'#ED1C24', series:[510,485,485,465,455,430,430,435,420,400,405,395] },
  { id:'rx7600xt', name:'RX 7600 XT', brand:'AMD', type:'GPU', tier:'budget', price:499, prev:300, high52:404, low52:215, color:'#ED1C24', series:[365,370,350,355,340,330,320,305,305,290,300,295] },
  { id:'rx7600', name:'RX 7600', brand:'AMD', type:'GPU', tier:'budget', price:279, prev:279, high52:377, low52:201, color:'#ED1C24', series:[350,355,340,335,325,320,310,300,300,295,280,275] },
  { id:'rx7500xt', name:'RX 7500 XT', brand:'AMD', type:'GPU', tier:'entry', price:300, prev:199, high52:269, low52:143, color:'#ED1C24', series:[250,250,245,235,235,230,220,210,210,205,195,200] },
  { id:'rx6950xt', name:'RX 6950 XT', brand:'AMD', type:'GPU', tier:'flagship', price:829, prev:800, high52:674, low52:359, color:'#ED1C24', series:[615,600,595,565,565,545,545,535,500,515,490,495] },
  { id:'rx6900xt', name:'RX 6900 XT', brand:'AMD', type:'GPU', tier:'high-end', price:699, prev:400, high52:539, low52:287, color:'#ED1C24', series:[505,485,470,460,460,435,430,430,415,390,400,405] },
  { id:'rx6800xt', name:'RX 6800 XT', brand:'AMD', type:'GPU', tier:'high-end', price:419, prev:345, high52:471, low52:251, color:'#ED1C24', series:[440,425,415,415,390,400,375,375,370,355,345,340] },
  { id:'rx6700xt', name:'RX 6700 XT', brand:'AMD', type:'GPU', tier:'mid-range', price:778, prev:250, high52:336, low52:179, color:'#ED1C24', series:[315,305,295,285,285,270,275,255,260,250,250,255] },
  { id:'rx6600xt', name:'RX 6600 XT', brand:'AMD', type:'GPU', tier:'budget', price:549, prev:190, high52:255, low52:136, color:'#ED1C24', series:[240,230,225,220,210,205,210,195,195,190,190,185] },
  { id:'rx6600', name:'RX 6600', brand:'AMD', type:'GPU', tier:'budget', price:329, prev:169, high52:228, low52:122, color:'#ED1C24', series:[215,205,200,205,195,190,190,180,175,170,165,165] },
  { id:'arc-b580', name:'Arc B580', brand:'Intel', type:'GPU', tier:'mid-range', price:289, prev:280, high52:390, low52:208, color:'#0071C5', series:[375,365,360,350,340,325,320,315,305,305,285,285] },
  { id:'arc-b570', name:'Arc B570', brand:'Intel', type:'GPU', tier:'budget', price:249, prev:250, high52:336, low52:179, color:'#0071C5', series:[310,310,305,285,285,280,270,260,265,250,250,245] },
  { id:'arc-a770', name:'Arc A770 16GB', brand:'Intel', type:'GPU', tier:'mid-range', price:379, prev:235, high52:309, low52:165, color:'#0071C5', series:[280,275,275,260,265,250,245,245,235,230,235,230] },
  { id:'arc-a750', name:'Arc A750', brand:'Intel', type:'GPU', tier:'budget', price:279, prev:190, high52:255, low52:136, color:'#0071C5', series:[230,235,220,215,210,205,210,195,195,190,190,185] },
  { id:'arc-a580', name:'Arc A580', brand:'Intel', type:'GPU', tier:'budget', price:220, prev:159, high52:215, low52:114, color:'#0071C5', series:[205,200,190,190,185,180,175,170,170,160,155,160] },
];

const CPU_DATA = [
  { id:'cu9-285k', name:'Core Ultra 9 285K', brand:'Intel', type:'CPU', tier:'flagship', price:557, prev:560, high52:752, low52:401, color:'#0071C5', series:[695,680,660,650,650,615,605,590,560,560,560,565] },
  { id:'cu7-265k', name:'Core Ultra 7 265K', brand:'Intel', type:'CPU', tier:'high-end', price:319, prev:305, high52:417, low52:222, color:'#0071C5', series:[375,375,375,370,350,340,335,320,310,310,305,310] },
  { id:'cu7-265kf', name:'Core Ultra 7 265KF', brand:'Intel', type:'CPU', tier:'high-end', price:249, prev:290, high52:390, low52:208, color:'#0071C5', series:[350,350,345,330,325,320,320,315,300,285,290,295] },
  { id:'cu5-245k', name:'Core Ultra 5 245K', brand:'Intel', type:'CPU', tier:'mid-range', price:219, prev:249, high52:336, low52:179, color:'#0071C5', series:[315,305,300,290,295,275,280,265,270,260,250,245] },
  { id:'cu5-245kf', name:'Core Ultra 5 245KF', brand:'Intel', type:'CPU', tier:'mid-range', price:175, prev:229, high52:309, low52:165, color:'#0071C5', series:[285,280,280,280,270,260,260,245,240,235,230,230] },
  { id:'cu5-235', name:'Core Ultra 5 235', brand:'Intel', type:'CPU', tier:'mid-range', price:229, prev:200, high52:269, low52:143, color:'#0071C5', series:[250,245,240,230,220,220,220,205,210,205,200,195] },
  { id:'i9-14900ks', name:'Core i9-14900KS', brand:'Intel', type:'CPU', tier:'flagship', price:689, prev:499, high52:674, low52:359, color:'#0071C5', series:[645,620,615,595,570,565,550,525,515,500,495,495] },
  { id:'i9-14900k', name:'Core i9-14900K', brand:'Intel', type:'CPU', tier:'flagship', price:519, prev:475, high52:632, low52:337, color:'#0071C5', series:[575,575,560,560,530,520,505,490,470,480,475,480] },
  { id:'i9-14900', name:'Core i9-14900', brand:'Intel', type:'CPU', tier:'high-end', price:620, prev:395, high52:525, low52:280, color:'#0071C5', series:[485,485,470,450,430,435,425,405,400,395,395,390] },
  { id:'i7-14700k', name:'Core i7-14700K', brand:'Intel', type:'CPU', tier:'high-end', price:361, prev:349, high52:471, low52:251, color:'#0071C5', series:[435,445,430,410,415,400,390,380,370,355,345,355] },
  { id:'i7-14700kf', name:'Core i7-14700KF', brand:'Intel', type:'CPU', tier:'high-end', price:329, prev:330, high52:444, low52:237, color:'#0071C5', series:[410,400,400,390,370,360,355,350,340,330,330,325] },
  { id:'i7-14700', name:'Core i7-14700', brand:'Intel', type:'CPU', tier:'high-end', price:528, prev:300, high52:404, low52:215, color:'#0071C5', series:[365,365,355,340,345,335,320,310,305,305,300,305] },
  { id:'i5-14600k', name:'Core i5-14600K', brand:'Intel', type:'CPU', tier:'mid-range', price:276, prev:280, high52:377, low52:201, color:'#0071C5', series:[350,335,335,330,320,315,310,285,290,280,280,285] },
  { id:'i5-14600kf', name:'Core i5-14600KF', brand:'Intel', type:'CPU', tier:'mid-range', price:239, prev:255, high52:350, low52:186, color:'#0071C5', series:[330,310,305,305,300,290,285,280,260,260,255,250] },
  { id:'i5-14600', name:'Core i5-14600', brand:'Intel', type:'CPU', tier:'mid-range', price:235, prev:230, high52:309, low52:165, color:'#0071C5', series:[290,285,275,260,255,255,250,245,235,230,230,235] },
  { id:'i5-14500', name:'Core i5-14500', brand:'Intel', type:'CPU', tier:'mid-range', price:550, prev:209, high52:282, low52:150, color:'#0071C5', series:[260,260,260,245,250,230,235,220,215,215,210,210] },
  { id:'i5-14400', name:'Core i5-14400', brand:'Intel', type:'CPU', tier:'budget', price:269, prev:185, high52:255, low52:136, color:'#0071C5', series:[240,235,225,225,215,215,200,195,195,190,185,180] },
  { id:'i5-14400f', name:'Core i5-14400F', brand:'Intel', type:'CPU', tier:'budget', price:238, prev:149, high52:201, low52:107, color:'#0071C5', series:[185,190,180,175,175,165,170,160,155,155,150,150] },
  { id:'i3-14100', name:'Core i3-14100', brand:'Intel', type:'CPU', tier:'entry', price:221, prev:105, high52:142, low52:76, color:'#0071C5', series:[135,135,130,125,125,120,120,120,115,110,105,105] },
  { id:'i3-14100f', name:'Core i3-14100F', brand:'Intel', type:'CPU', tier:'entry', price:100, prev:79, high52:107, low52:57, color:'#0071C5', series:[105,95,95,95,95,90,90,85,85,80,80,80] },
  { id:'i9-13900k', name:'Core i9-13900K', brand:'Intel', type:'CPU', tier:'flagship', price:474, prev:350, high52:471, low52:251, color:'#0071C5', series:[440,430,420,405,405,390,385,360,370,355,350,355] },
  { id:'i9-13900ks', name:'Core i9-13900KS', brand:'Intel', type:'CPU', tier:'flagship', price:648, prev:435, high52:579, low52:309, color:'#0071C5', series:[535,535,505,490,485,465,455,445,445,440,435,430] },
  { id:'i7-13700k', name:'Core i7-13700K', brand:'Intel', type:'CPU', tier:'high-end', price:478, prev:275, high52:377, low52:201, color:'#0071C5', series:[350,340,340,325,315,315,295,295,290,285,275,280] },
  { id:'i5-13600k', name:'Core i5-13600K', brand:'Intel', type:'CPU', tier:'mid-range', price:222, prev:220, high52:296, low52:158, color:'#0071C5', series:[265,265,265,255,255,250,230,235,225,225,220,225] },
  { id:'i5-13400', name:'Core i5-13400', brand:'Intel', type:'CPU', tier:'budget', price:165, prev:170, high52:228, low52:122, color:'#0071C5', series:[210,200,200,195,185,185,185,180,170,170,170,165] },
  { id:'i3-13100', name:'Core i3-13100', brand:'Intel', type:'CPU', tier:'entry', price:239, prev:119, high52:161, low52:86, color:'#0071C5', series:[150,145,145,145,140,135,130,130,125,120,125,115] },
  { id:'r9-9950x3d', name:'Ryzen 9 9950X3D', brand:'AMD', type:'CPU', tier:'flagship', price:700, prev:680, high52:911, low52:486, color:'#ED1C24', series:[850,805,790,795,750,755,720,710,695,675,680,690] },
  { id:'r9-9950x', name:'Ryzen 9 9950X', brand:'AMD', type:'CPU', tier:'flagship', price:524, prev:530, high52:701, low52:374, color:'#ED1C24', series:[635,620,605,615,585,585,565,550,520,505,530,535] },
  { id:'r9-9900x3d', name:'Ryzen 9 9900X3D', brand:'AMD', type:'CPU', tier:'high-end', price:488, prev:560, high52:741, low52:395, color:'#ED1C24', series:[680,670,645,640,635,600,605,565,575,560,560,550] },
  { id:'r9-9900x', name:'Ryzen 9 9900X', brand:'AMD', type:'CPU', tier:'high-end', price:449, prev:380, high52:512, low52:273, color:'#ED1C24', series:[470,470,445,445,425,420,415,395,385,375,380,385] },
  { id:'r7-9850x3d', name:'Ryzen 7 9850X3D', brand:'AMD', type:'CPU', tier:'high-end', price:500, prev:505, high52:674, low52:359, color:'#ED1C24', series:[615,600,580,580,580,555,525,515,525,505,505,510] },
  { id:'r7-9800x3d', name:'Ryzen 7 9800X3D', brand:'AMD', type:'CPU', tier:'high-end', price:479, prev:420, high52:566, low52:302, color:'#ED1C24', series:[525,510,490,485,480,465,450,445,435,410,420,425] },
  { id:'r7-9700x', name:'Ryzen 7 9700X', brand:'AMD', type:'CPU', tier:'mid-range', price:285, prev:300, high52:404, low52:215, color:'#ED1C24', series:[375,355,360,355,350,340,330,315,300,295,300,295] },
  { id:'r5-9600x', name:'Ryzen 5 9600X', brand:'AMD', type:'CPU', tier:'mid-range', price:220, prev:189, high52:255, low52:136, color:'#ED1C24', series:[235,230,235,220,220,215,210,210,205,195,185,190] },
  { id:'r5-9600', name:'Ryzen 5 9600', brand:'AMD', type:'CPU', tier:'budget', price:249, prev:169, high52:228, low52:122, color:'#ED1C24', series:[215,215,210,205,195,190,185,185,180,175,165,170] },
  { id:'r9-7950x3d', name:'Ryzen 9 7950X3D', brand:'AMD', type:'CPU', tier:'flagship', price:506, prev:549, high52:741, low52:395, color:'#ED1C24', series:[700,670,670,645,655,615,625,590,565,550,535,540] },
  { id:'r9-7950x', name:'Ryzen 9 7950X', brand:'AMD', type:'CPU', tier:'flagship', price:507, prev:445, high52:608, low52:324, color:'#ED1C24', series:[560,535,540,525,515,485,485,465,450,460,445,440] },
  { id:'r9-7900x3d', name:'Ryzen 9 7900X3D', brand:'AMD', type:'CPU', tier:'high-end', price:512, prev:330, high52:444, low52:237, color:'#ED1C24', series:[420,400,385,390,370,370,350,340,330,325,330,325] },
  { id:'r9-7900x', name:'Ryzen 9 7900X', brand:'AMD', type:'CPU', tier:'high-end', price:327, prev:300, high52:404, low52:215, color:'#ED1C24', series:[370,355,350,345,335,325,325,315,310,300,300,305] },
  { id:'r9-7900', name:'Ryzen 9 7900', brand:'AMD', type:'CPU', tier:'high-end', price:280, prev:279, high52:377, low52:201, color:'#ED1C24', series:[350,340,340,335,330,320,315,305,295,280,285,280] },
  { id:'r7-7800x3d', name:'Ryzen 7 7800X3D', brand:'AMD', type:'CPU', tier:'high-end', price:344, prev:305, high52:404, low52:215, color:'#ED1C24', series:[380,365,350,355,330,330,315,310,305,290,305,300] },
  { id:'r7-7700x', name:'Ryzen 7 7700X', brand:'AMD', type:'CPU', tier:'mid-range', price:249, prev:225, high52:304, low52:162, color:'#ED1C24', series:[285,280,275,265,265,255,250,245,230,225,220,230] },
  { id:'r7-7700', name:'Ryzen 7 7700', brand:'AMD', type:'CPU', tier:'mid-range', price:214, prev:199, high52:269, low52:143, color:'#ED1C24', series:[250,255,240,235,235,230,225,215,205,205,200,200] },
  { id:'r5-7600x', name:'Ryzen 5 7600X', brand:'AMD', type:'CPU', tier:'mid-range', price:177, prev:190, high52:255, low52:136, color:'#ED1C24', series:[235,225,230,215,220,210,200,205,195,185,190,195] },
  { id:'r5-7600', name:'Ryzen 5 7600', brand:'AMD', type:'CPU', tier:'budget', price:176, prev:169, high52:228, low52:122, color:'#ED1C24', series:[215,210,210,205,195,190,185,185,180,170,170,165] },
  { id:'r5-7500f', name:'Ryzen 5 7500F', brand:'AMD', type:'CPU', tier:'budget', price:128, prev:149, high52:201, low52:107, color:'#ED1C24', series:[190,190,185,180,170,170,165,165,155,155,150,150] },
  { id:'r9-5950x', name:'Ryzen 9 5950X', brand:'AMD', type:'CPU', tier:'flagship', price:351, prev:345, high52:471, low52:251, color:'#ED1C24', series:[440,415,420,400,385,390,385,380,350,350,345,350] },
  { id:'r9-5900x', name:'Ryzen 9 5900X', brand:'AMD', type:'CPU', tier:'high-end', price:280, prev:209, high52:282, low52:150, color:'#ED1C24', series:[260,265,260,245,245,235,225,220,215,220,210,210] },
  { id:'r7-5800x3d', name:'Ryzen 7 5800X3D', brand:'AMD', type:'CPU', tier:'high-end', price:427, prev:219, high52:296, low52:158, color:'#ED1C24', series:[280,270,260,265,260,255,245,235,235,225,220,215] },
  { id:'r7-5800x', name:'Ryzen 7 5800X', brand:'AMD', type:'CPU', tier:'mid-range', price:231, prev:195, high52:269, low52:143, color:'#ED1C24', series:[250,245,240,225,220,215,215,205,200,205,195,190] },
  { id:'r5-5600x', name:'Ryzen 5 5600X', brand:'AMD', type:'CPU', tier:'mid-range', price:148, prev:145, high52:196, low52:104, color:'#ED1C24', series:[185,180,180,175,170,170,170,160,160,155,150,140] },
  { id:'r5-5600', name:'Ryzen 5 5600', brand:'AMD', type:'CPU', tier:'budget', price:129, prev:129, high52:174, low52:93, color:'#ED1C24', series:[165,160,155,155,150,145,145,140,135,135,125,130] },
  { id:'r5-5500', name:'Ryzen 5 5500', brand:'AMD', type:'CPU', tier:'entry', price:88, prev:79, high52:107, low52:57, color:'#ED1C24', series:[100,95,95,95,95,90,90,85,85,80,80,80] },
];

const ALL_DATA = [...GPU_DATA, ...CPU_DATA];

// ── Alias للتوافق مع app.js و compare.html ──────────────
const ALL_PARTS = ALL_DATA;

// ── حساب نسبة التغيير بين السعر الحالي والسابق ──────────
function calcChange(current, prev) {
  return ((current - prev) / prev * 100).toFixed(1);
}

// ── رسم خط Sparkline المصغر لعمود السلسلة ───────────────
function makeSpark(series) {
  const max = Math.max(...series), min = Math.min(...series);
  const w = 60, h = 24, pad = 2;
  const pts = series.map((v, i) => {
    const x = pad + (i / (series.length - 1)) * (w - pad * 2);
    const y = h - pad - ((v - min) / (max - min || 1)) * (h - pad * 2);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  const last  = series[series.length - 1];
  const first = series[0];
  const stroke = last >= first ? '#22C55E' : '#EF4444';
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" style="display:block">` +
         `<polyline points="${pts}" fill="none" stroke="${stroke}" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/></svg>`;
}

// ── تهيئة شريط التنقل (القائمة المتجاوبة + الرابط النشط) ─
function initNavbar() {
  const toggle = document.getElementById('burger');
  const menu   = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', e => {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  // تمييز الرابط النشط بناءً على المسار الحالي
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a.nav-link').forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop();
    if (href === path) a.classList.add('active');
  });
}
// ── متغير لحفظ معلومات آخر تحديث ─────────────────────────
let _updateInfo = {
  isLive: false,
  lastUpdated: null,
  timeAgo: 'بيانات محلية',
  nextUpdate: null
};

// ── جلب الأسعار الحية من الخادم (أو الرجوع للبيانات المحلية) ─
async function fetchLivePrices() {
  try {
    const res = await fetch('/api/prices/live');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const json = await res.json();
    if (!json.data || !json.data.length) throw new Error('empty response');

    // تحديث ALL_DATA في مكانه حتى تتحدث ALL_PARTS تلقائياً
    ALL_DATA.splice(0, ALL_DATA.length, ...json.data);

    // حساب وقت آخر تحديث
    const now     = new Date();
    const updated = json.updated_at ? new Date(json.updated_at) : now;
    const diffMin = Math.round((now - updated) / 60000);
    const timeAgo = diffMin < 1
      ? 'الآن'
      : diffMin < 60
        ? 'منذ ' + diffMin + ' دقيقة'
        : 'منذ ' + Math.round(diffMin / 60) + ' ساعة';

    _updateInfo = {
      isLive:      true,
      lastUpdated: json.updated_at || null,
      timeAgo,
      nextUpdate:  json.next_update || null
    };
    return true;

  } catch (err) {
    // فشل الاتصال — نستخدم البيانات المحلية كما هي
    _updateInfo = {
      isLive:      false,
      lastUpdated: null,
      timeAgo:     'بيانات محلية',
      nextUpdate:  null
    };
    return false;
  }
}

// ── إرجاع معلومات آخر تحديث ─────────────────────────────
function getUpdateInfo() {
  return _updateInfo;
}
