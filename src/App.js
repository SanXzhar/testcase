import './App.css';
import phone from './phone.png';
import icon from './icon.png';
import icon1 from './koke.png';
import icon2 from './moneuman.png';
import icon3 from './zimer.png';
import icon4 from './zaimy.png';
import icon5 from './turbmoney.png';
import icon6 from './dengy.png';

function App() {
  return (
    <div className='main'>
      <div className='title'>
          <div className='content'>
            <div className='text'>
              <div className='maintext'>ОНЛАЙН КРЕДИТ БЕЗ <br/> СПРАВОК И ПОРУЧИТЕЛЕЙ</div>
              <div className='subtext'>Сравним и подберем лучшие условия для Вас!</div>
            </div>
            <div className='blue'>
              <div className='language'>
                <div className='RU'>RU</div>
                <div className='KZ'>KZ</div>
              </div>
              <div className='phone'>
                <div className='phoneicon'><img src={phone} alt="phone"></img></div>
                <div className='number'>6901</div>
              </div>
              <div className='call'>ЗВОНОК БЕСПЛАТНЫЙ</div>
              <div className='whatsapp'>
                <div className='icon'><img src={icon} alt="icon"/></div>
                <div className='number1'>8 708 808 6901</div>
              </div>
            </div>
          </div>
      </div>
      <div className='mainpart'>
        <div className='catalog'>
          <div className='row1'>
            <div className='item1'>
              <div className='item1icon'><img src={icon1} alt='icon1'></img></div>
              <div className='bar'></div>
              <div className='item1title'>Без переплат 0,1%</div>
              <div className='bar'></div>
              <div className='item1description'>
                <div className='item1options'>
                  <div className='item1option1'>
                    <div>Первый</div><div>до 145 000 ₸</div>
                  </div>
                  <div className='item1option1'>
                    <div>Сумма</div><div>мах 145 000 ₸</div>
                  </div>
                  <div className='item1option1'>
                    <div>Возраст</div><div>19 до 70</div>
                  </div>
                  <div className='item1option1'>
                    <div>Время получения</div><div>15 мин.</div>
                  </div>
                </div>
              </div>
              <div className='button'>Подать заявку</div>
            </div>
            <div className='item2'>
              <div className='item2icon'><img src={icon2} alt='icon2'></img></div>
              <div className='bar'></div>
              <div className='item1title'>Первый без переплат</div>
              <div className='bar'></div>
              <div className='item1description'>
                <div className='item1options'>
                  <div className='item1option1'>
                    <div>Первый</div><div>до 145 000 ₸</div>
                  </div>
                  <div className='item1option1'>
                    <div>Сумма</div><div>мах 145 000 ₸</div>
                  </div>
                  <div className='item1option1'>
                    <div>Возраст</div><div>18 до 75</div>
                  </div>
                  <div className='item1option1'>
                    <div>Время получения</div><div>15 мин.</div>
                  </div>
                </div>
              </div>
              <div className='button'>Подать заявку</div>
            </div>
          </div>
          <div className='row2'>
          <div className='item1'>
              <div className='item1icon'><img src={icon3} alt='icon1'></img></div>
              <div className='bar'></div>
              <div className='item1title'>Новым клиентам 0,01%</div>
              <div className='bar'></div>
              <div className='item1description'>
                <div className='item1options'>
                  <div className='item1option1'>
                    <div>Первый</div><div>до 90 000 ₸</div>
                  </div>
                  <div className='item1option1'>
                    <div>Сумма</div><div>мах 145 000 ₸</div>
                  </div>
                  <div className='item1option1'>
                    <div>Возраст</div><div>18 до 75</div>
                  </div>
                  <div className='item1option1'>
                    <div>Время получения</div><div>5 мин.</div>
                  </div>
                </div>
              </div>
              <div className='button'>Подать заявку</div>
            </div>
            <div className='item2'>
              <div className='item2icon'><img src={icon4} alt='icon2'></img></div>
              <div className='bar'></div>
              <div className='item1title'>Первые 7 дней 0%</div>
              <div className='bar'></div>
              <div className='item1description'>
                <div className='item1options'>
                  <div className='item1option1'>
                    <div>Первый</div><div>до 145 000 ₸</div>
                  </div>
                  <div className='item1option1'>
                    <div>Сумма</div><div>мах 145 000 ₸</div>
                  </div>
                  <div className='item1option1'>
                    <div>Возраст</div><div>21 до 73</div>
                  </div>
                  <div className='item1option1'>
                    <div>Время получения</div><div>10 мин.</div>
                  </div>
                </div>
              </div>
              <div className='button'>Подать заявку</div>
            </div>
          </div>
          <div className='row3'>
          <div className='item1'>
              <div className='item1icon'><img src={icon5} alt='icon1'></img></div>
              <div className='bar'></div>
              <div className='item1title'>Первый без переплат</div>
              <div className='bar'></div>
              <div className='item1description'>
                <div className='item1options'>
                  <div className='item1option1'>
                    <div>Первый</div><div>до 145 000 ₸</div>
                  </div>
                  <div className='item1option1'>
                    <div>Сумма</div><div>мах 145 000 ₸</div>
                  </div>
                  <div className='item1option1'>
                    <div>Возраст</div><div>21 до 75</div>
                  </div>
                  <div className='item1option1'>
                    <div>Время получения</div><div>15 мин.</div>
                  </div>
                </div>
              </div>
              <div className='button'>Подать заявку</div>
            </div>
            <div className='item2'>
              <div className='item2icon'><img src={icon6} alt='icon2'></img></div>
              <div className='bar'></div>
              <div className='item1title'>Без переплат</div>
              <div className='bar'></div>
              <div className='item1description'>
                <div className='item1options'>
                  <div className='item1option1'>
                    <div>Первый</div><div>до 145 000 ₸</div>
                  </div>
                  <div className='item1option1'>
                    <div>Сумма</div><div>мах 145 000 ₸</div>
                  </div>
                  <div className='item1option1'>
                    <div>Возраст</div><div>21 до 70</div>
                  </div>
                  <div className='item1option1'>
                    <div>Время получения</div><div>15 мин.</div>
                  </div>
                </div>
              </div>
              <div className='button'>Подать заявку</div>
            </div>
          </div>
        </div>
        <div className='sideinfo'>
          <div className='info'>
            <div className='num'>1.</div>
            <div className='textinfo'>Позвонив нам Вы получите подробную консультацию по всем Вашим вопросам от наших операторов.</div>
          </div>
          <div className='barinfo'></div>
          <div className='info1'>
            <div className='num'>2.</div>
            <div className='textinfo'>Для получения займа достаточно одного документа - удостоверение личности. Без залога, без дохода, без пенсионных отчислений, с действующим кредитом, пенсионерам и студентам.</div>
          </div>
          <div className='barinfo'></div>
          <div className='info1'>
            <div className='num'>3.</div>
            <div className='textinfo'>Режим работы нашего колл-центра 6901 с 09:00 - 20:00 ежедневно без выходных.</div>
          </div>
          <div className='barinfo'></div>
          <div className='info1'>
            <div className='num'>4.</div>
            <div className='textinfo'>Наши операторы помогут Вам оформить заявку правильно, для повышения вероятности одобрения.</div>
          </div>
          <div className='barinfo'></div>
          <div className='info1'>
            <div className='num'>5.</div>
            <div className='textinfo'>Если Вы зашли на сайт в нерабочее время нашего центра 6901, то Вы можете попробовать самостоятельно оформить займ выбрав одно из представленных МФО кликнув на “Подать заявку”, пошагово заполнив поля.</div>
          </div>
        </div>
      </div>
      <div className='barmain'></div>
      <div className='lasttext'>Данный сайт предоставляет исключительно информационные услуги!</div>
      <div className='barmain1'></div>
      <div className='copyright'>© 2017 - 2022</div>
    </div>
  );
}

export default App;
