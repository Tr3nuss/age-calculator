import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAge } from "../store/calcSlice/calcSlice";
import {
  calculateYearsDifference,
  calculateMonthsDifference,
  calculateDaysDifference,
} from "../utilites/workDate";

export default function AgeCalculator() {
  const getUserAge = useRef();
  const value = useSelector((state) => state.calculator.realSecondsTime);
  const ageDispatch = useDispatch();
  console.log(value);

  return (
    <div className="bg-[gray] h-[100vh]">
      <input type="date" ref={getUserAge} className="text-[gray]" />
      <button
        onClick={() =>
          ageDispatch(getAge(new Date(getUserAge.current.value).getTime()))
        }
      >
        Посчитать возраст
      </button>

      {value && (
        <div>
          <p>Годы: {calculateYearsDifference(new Date(value), new Date())}</p>
          <p>
            Месяцы: {calculateMonthsDifference(new Date(value), new Date())}
          </p>
          <p>Дни: {calculateDaysDifference(new Date(value), new Date())}</p>
        </div>
      )}
    </div>
  );
}
