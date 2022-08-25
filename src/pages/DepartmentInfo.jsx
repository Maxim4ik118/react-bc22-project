import { useParams } from 'react-router-dom';
import { useState } from 'react';
import cn from 'classnames';
const { Section, Paper } = require('components');

const DepartmentInfo = ({ departments }) => {
  const [tab, setTab] = useState('description');
  const { departmentId } = useParams();
  const getDepartmentInfo = departmentId => {
    return departments?.find(item => item.id === departmentId) ?? {};
  };

  return (
    <div>
      <Section title={getDepartmentInfo(departmentId).text ?? ''}>
        <div className="buttonsTumb">
          <button
            className={cn({
              active: tab === 'description',
            })}
            type="button"
            onClick={() => setTab('description')}
          >
            Описание
          </button>
          <button
            className={cn({
              active: tab === 'history',
            })}
            type="button"
            onClick={() => setTab('history')}
          >
            История
          </button>
        </div>
        <Paper>
          {tab === 'description' && (
            <p>
              Опыт, концентрат знаний и возможность избежать большинство ошибок
              при приеме на работу. Мы знаем, что хотят большинство локальных и
              иностранных компаний и можем вам это дать. А еще мы постоянно
              совершенствуем наши курсы программирования, добавляя туда что-то
              новое. Вы можете лично ознакомиться с историями успеха наших
              выпускников, чтобы убедиться в эффективности нашей методики
              обучения. Да, мы начнем с азов и самой простой информации. Знаем,
              что большинство людей приходят к нам с нулевыми знаниями.
            </p>
          )}
          {tab === 'history' && <p>История факультета:</p>}
        </Paper>
      </Section>
    </div>
  );
};

export default DepartmentInfo;
