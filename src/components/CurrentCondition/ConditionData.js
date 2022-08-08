import React from "react";
import * as BiIcons from 'react-icons/bi'
import * as TbIcons from 'react-icons/tb'
import * as IoIcons from 'react-icons/io5'
import * as MdIcons from 'react-icons/md'

const iconColor = "#90d9a5"
export const ConditionData = [
   {
      id: 1,
      title: 'Air Temperature',
      icon: <TbIcons.TbTemperatureCelsius className="condition-icon" style={{ color: iconColor }} />,
      className: 'condition',
      value: 'airTemperature',
      concate: '',
   },
   {
      id: 2,
      title: 'Air Humidity',
      icon: <BiIcons.BiWater className="condition-icon" style={{ color: iconColor }} />,
      className: 'condition',
      value: 'airHumidity',
      concate: '%',
   },
   {
      id: 3,
      title: 'Soil Moisture',
      icon: <IoIcons.IoWaterOutline className="condition-icon" style={{ color: iconColor }} />,
      className: 'condition',
      value: 'soilMoisture',
      concate: '%',
   },
   {
      id: 4,
      title: 'Light Intensity',
      icon: <MdIcons.MdOutlineLightMode className="condition-icon" style={{ color: iconColor }} />,
      className: 'condition',
      value: 'lightIntensity',
      concate: '%',
   },
]