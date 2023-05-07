import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTap } from "../app/reducers/betSlice";

const BetTap = () => {
  const dispatch = useDispatch();

  const { activeTap } = useSelector((state) => state.betModal);

  const handleTap = (e, tap) => {
    e.preventDefault();
    dispatch(setActiveTap(tap))
  };

  return (
    <div className="tabs-list">
      <a className={`tab-btn ${activeTap === 'tab1' && 'active'}`} href="#" onClick={(e)=> handleTap(e, "tab1")}>
        الفريق الفائز
      </a>
      <a className={`tab-btn ${activeTap === 'tab2' && 'active'}`} href="#" onClick={(e)=> handleTap(e, "tab2")}>
        نتيجة المبارات
      </a>
      <a className={`tab-btn ${activeTap === 'tab3' && 'active'}`} href="#" onClick={(e)=> handleTap(e, "tab3")}>
        فارق الأهداف
      </a>
      <a className={`tab-btn ${activeTap === 'tab4' && 'active'}`} href="#" onClick={(e)=> handleTap(e, "tab4")}>
        الهدافين
      </a>
      <a className={`tab-btn ${activeTap === 'tab5' && 'active'}`} href="#" onClick={(e)=> handleTap(e, "tab5")}>
        السباق للتهديف
      </a>
    </div>
  );
};

export default BetTap;
