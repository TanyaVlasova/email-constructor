import images from './images';

export interface EmailElemData {
  id: number;
  title: string;
  code: string;
}

const elems: EmailElemData[] = [
  {
    id: 1,
    title: 'Шапка 1',
    code: `
      <!-- +Header -->
      <td>
        <a href="https://divan.ru" target="_blank" style="text-decoration: none;">
          <img src="${images.header1}" style="display: block; width: 560px; height: 100px;" alt="divan.ru" />
        </a>
      </td>
      <!-- -Header -->
    `
  },
  {
    id: 2,
    title: 'Шапка  2',
    code: `
      <!-- +Header -->
      <td>
        <table border="0" cellpadding="0" cellspacing="0" style="width: 560px; height: 100px;">
          <tr>
            <td>
              <a href="https://divan.ru" target="_blank" style="text-decoration: none;">
                <img src="${images.header2Logo}" style="display: block; width: 280px; height: 100px;" alt="divan.ru" />
              </a>
            </td>
            <td>
              <a href="https://divan.ru/catalog/room" target="_blank" style="text-decoration: none;">
                <img src="${images.header2Rooms}" style="display: block; width: 280px; height: 100px;" alt="Комнаты" />
              </a>
            </td>
          </tr>
        </table>
      </td>
      <!-- -Header -->
    `
  },
  {
    id: 3,
    title: 'Шапка 3',
    code: `
      <!-- +Header -->
      <td>
        <a href="https://divan.ru/site/divan-club" target="_blank" style="text-decoration: none;">
          <img src="${images.header3}" style="display: block; width: 560px; height: 100px;" alt="divan.ru" />
        </a>
      </td>
      <!-- -Header -->
    `
  },
  {
    id: 4,
    title: 'Отступ 20px',
    code: `<td style='height: 20px;'></td>`
  },
  {
    id: 5,
    title: 'Отступ 40px',
    code: `<td style='height: 40px;'></td>`
  },
  {
    id: 6,
    title: 'Отступ 60px',
    code: `<td style='height: 60px;'></td>`
  },
  {
    id: 7,
    title: 'Отступ 80px',
    code: `<td style='height: 80px;'></td>`
  }
];

export default elems;
