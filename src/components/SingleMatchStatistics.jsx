import React from "react";
import barca from "../assets/img/Barcelona.svg";

const SingleMatchStatistics = () => {
  return (
    <div className="tab-content statistics-tab active">
      <div className="statistics-box">
        <div className="table-responsive">
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td>
                  <img
                    className="img-fluid"
                    src={barca}
                    alt="teamName"
                  />
                </td>
                <td>
                  <p className="tabel-td">أحصائيات الفريق</p>
                </td>
                <td>
                  <img
                    className="img-fluid"
                    src={barca}
                    alt="teamName"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <p className="tabel-td">39%</p>
                </td>
                <td>
                  <p className="tabel-td">امتلاك الكرة</p>
                </td>
                <td>
                  <p className="tabel-td">61%</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="tabel-td">14</p>
                </td>
                <td>
                  <p className="tabel-td">التسديدات على المرمى</p>
                </td>
                <td>
                  <p className="tabel-td">30</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="tabel-td">23</p>
                </td>
                <td>
                  <p className="tabel-td">التسديدات البعيدة على المرمى</p>
                </td>
                <td>
                  <p className="tabel-td">15</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="tabel-td">10</p>
                </td>
                <td>
                  <p className="tabel-td">الركنيات</p>
                </td>
                <td>
                  <p className="tabel-td">14</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="tabel-td">14</p>
                </td>
                <td>
                  <p className="tabel-td">الأخطاء</p>
                </td>
                <td>
                  <p className="tabel-td">15</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="tabel-td">10</p>
                </td>
                <td>
                  <p className="tabel-td">ضربات المرمى</p>
                </td>
                <td>
                  <p className="tabel-td">14</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SingleMatchStatistics;
