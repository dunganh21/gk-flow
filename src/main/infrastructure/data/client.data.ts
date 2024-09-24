import { Client } from '@/shared/types/client.type'

export const customerMapping: Client[] = [
  {
    _id: '1',
    code: 'MNIF',
    representative: 'NMR Thanh Hoa',
    companyName: 'YAMASHITA VIETNAM CO., LTD',
    factoryName: 'Yamashita',
    liftingPayer: 'GKLV',
    scopeOfWork: 'MN làm vận chuyển, kí giám sát, thanh toán CSHT'
  },
  {
    _id: '2',
    code: 'MNIA',
    representative: 'NMR Hà Nội',
    companyName: 'Công ty TNHH MTV Đầu tư và Phát triển Bất động sản Hà Nội',
    factoryName: 'Nhà máy Hà Nội',
    liftingPayer: 'NMR Hà Nội',
    scopeOfWork: 'Kí giám sát'
  }
]
