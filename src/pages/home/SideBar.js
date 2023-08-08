import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchColors } from '../../redux/actions/colorAction';
import { fetchMaterials } from '../../redux/actions/materialAction';

function SideBar({ onFilterChange }) {
    const colors = useSelector((state) => state.colors);
    const materials = useSelector((state) => state.materials);
    const dispatch = useDispatch();
  
    const [selectedColor, setSelectedColor] = useState('All');
    const [selectedMaterial, setSelectedMaterial] = useState('All');
  
    useEffect(() => {
      dispatch(fetchColors());
      dispatch(fetchMaterials());
    }, [dispatch]);
  
    const handleColorChange = (color_id) => {
        console.log(color_id,"nn")
      setSelectedColor(color_id);
      onFilterChange({ color_id, material: selectedMaterial });
    };
  
    const handleMaterialChange = (material_id) => {
        console.log(material_id,"mm")
      setSelectedMaterial(material_id);
      onFilterChange({ color: selectedColor, material_id });
    };

  return (
    <>
      <div className="filters">
        <b className="filter">Filter</b>
        <div className="materials-parent">
          <div className="filter">Materials</div>
          <div className="all-parent">
            <b className="filter" onClick={() => handleMaterialChange('All')}>All</b>
            {Array.isArray(materials) &&
              materials.map(material => (
                <div
                  key={material.id}
                  className={selectedMaterial === material.name ? 'filter active' : 'filter'}
                  onClick={() => handleMaterialChange(material.id)}
                >
                  {material.name}
                </div>
              ))}
          </div>
        </div>
        <div className="color-parent">
          <div className="color">Color</div>
          <b className="filter" onClick={() => handleColorChange('All')}>All</b>
          {Array.isArray(colors) &&
            colors.map(color => (
              <div
                key={color.id}
                className={selectedColor === color.name ? 'filter active' : 'filter'}
                onClick={() => handleColorChange(color.id)}
              >
                {color.name}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default SideBar;
