
import React, { useState } from 'react';

function App() {
  const [options, setOptions] = useState([
    { id: 1, name: 'Home', selected: false, submenu: [] },
    {
      id: 2,
      name: 'About',
      selected: false,
      submenu: [
        {
          id: 5,
          name: 'Team',
          selected: false,
          submenu: [
            { id: 9, name: 'coding', selected: false, submenu: [] },
            { id: 10, name: 'Design', selected: false, submenu: [] },
          ],
        },
        { id: 6, name: 'History', selected: false, submenu: [] },
      ],
    },
    {
      id: 3,
      name: 'Contact',
      selected: false,
      submenu: [
        { id: 7, name: 'Email', selected: false, submenu: [] },
        { id: 8, name: 'Phone', selected: false, submenu: [] },
      ],
    },
    { id: 4, name: 'Services', selected: false, submenu: [] },
  ]);
  const [savedData, setSavedData] = useState([]);
  const [visibleSubmenus, setVisibleSubmenus] = useState({});

  const handleCheckboxChange = (id, parentOptions = options) => {
    const updatedOptions = parentOptions.map((option) => {
      if (option.id === id) {
        return { ...option, selected: !option.selected };
      }
      if (option.submenu?.length) {
        return { ...option, submenu: handleCheckboxChange(id, option.submenu) };
      }
      return option;
    });
    return updatedOptions;
  };
  const handleChange = (id) => {
    setOptions((prevOptions) => handleCheckboxChange(id, prevOptions));
  };
  const saveToJSON = () => {
    const filterSelectedOptions = (options) =>
      options
        .map((option) => ({
          ...option,
          submenu: filterSelectedOptions(option.submenu || []),
        }))
        .filter((option) => option.selected || option.submenu.length > 0);

    const selectedOptions = filterSelectedOptions(options);
    setSavedData(selectedOptions);

    console.log('Saved Data:', JSON.stringify(selectedOptions, null, 2));
  };
  const toggleSubmenu = (id) => {
    setVisibleSubmenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const renderNavItems = (items, level = 0) => (
    <div>
      {items.map((item) => (
        <div key={item.id} style={styles.navItemContainer}>
          <div
            style={styles.navItem}
            onClick={() => item.submenu.length > 0 && toggleSubmenu(item.id)}
          >
            {item.name}
            {item.submenu.length > 0 && (
              <span style={styles.arrow}>
                {visibleSubmenus[item.id] ? '▲' : '▼'}
              </span>
            )}
          </div>
          {item.submenu.length > 0 && visibleSubmenus[item.id] && (
            <div style={{ ...styles.dropdown, marginLeft: `${level * 20}px` }}>
              {renderNavItems(item.submenu, level + 1)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
  const renderOptions = (options, parentId = null, level = 0) => (
    <div style={{ marginLeft: `${level * 20}px` }}>
      {options.map((option) => (
        <div key={option.id} style={{ marginBottom: '10px' }}>
          <label>
            <input
              type="checkbox"
              checked={option.selected}
              onChange={() => handleChange(option.id)}
            />
            {option.name}
          </label>
          {option.submenu.length > 0 && renderOptions(option.submenu, option.id, level + 1)}
        </div>
      ))}
    </div>
  );
  return (
    <div style={{ padding: '20px' }}>
      <h2>Select Options</h2>
      {renderOptions(options)}

      <button onClick={saveToJSON} style={{ marginTop: '20px' }}>
        Save to JSON
      </button>

      {savedData.length > 0 && (
        <div style={{ marginTop: '40px' }}>
          <h3>Saved Data Navbar</h3>
          <nav style={styles.navbar}>{renderNavItems(savedData)}</nav>
        </div>
      )}
    </div>
  );
}
const styles = {
    navbar: {
      display: 'flex',
      flexDirection: 'column',
      background: '#f0f0f0',
      padding: '30px',
      borderRadius: '5px',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    navList: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'row',
      gap: '100px',
    },
    navItemContainer: {
      position: 'relative',
    },
    navItem: {
      textDecoration: 'none',
      color: '#007bff',
      padding: '10px 30px',
      border: '1px solid #007bff',
      borderRadius: '4px',
      cursor: 'pointer',
      background: '#fff',
    },
    arrow: {
      marginLeft: '10px',
      fontSize: '12px',
      color: '#333',
    },
    dropdown: {
      position: 'absolute',
      top: '100%',
      left: 0,
      background: '#fff',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      padding: '5px 0',
      zIndex: 1,
    },
  };
export default App;


