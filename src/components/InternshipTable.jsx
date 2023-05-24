import React from 'react';
import Select from 'react-select';
import '../css/component/internshipTable.css';
import LocationCitySharpIcon from '@mui/icons-material/LocationCitySharp';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BarChartIcon from '@mui/icons-material/BarChart';

function InternshipTable() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
    
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">
            <Select
              options={[
                { label: 'Internship Title', value: 'title' },
                { label: 'Completion Period', value: 'period' },
                { label: 'Total Enrolled', value: 'enrolled' },
                { label: 'Qualified Candidates', value: 'candidates' },
              ]}
              defaultValue={{ label: 'Internship Title', value: 'title' }}
            />
          </th>
          <th className="widgetLgTh">
            <Select
              options={[
                { label: 'Internship Title', value: 'title' },
                { label: 'Completion Period', value: 'period' },
                { label: 'Total Enrolled', value: 'enrolled' },
                { label: 'Qualified Candidates', value: 'candidates' },
              ]}
              defaultValue={{ label: 'Completion Period', value: 'period' }}
            />
          </th>
          <th className="widgetLgTh">
            <Select
              options={[
                { label: 'Internship Title', value: 'title' },
                { label: 'Completion Period', value: 'period' },
                { label: 'Total Enrolled', value: 'enrolled' },
                { label: 'Qualified Candidates', value: 'candidates' },
              ]}
              defaultValue={{ label: 'Total Enrolled', value: 'enrolled' }}
            />
          </th>
          <th className="widgetLgTh">
            <Select
              options={[
                { label: 'Internship Title', value: 'title' },
                { label: 'Completion Period', value: 'period' },
                { label: 'Total Enrolled', value: 'enrolled' },
                { label: 'Qualified Candidates', value: 'candidates' },
              ]}
              defaultValue={{ label: 'Qualified Candidates', value: 'candidates' }}
            />
          </th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetInternship">
            <h4>Product Design GVI</h4>
            <p>Amit minim mollit non deserunt est sit aliqua dolor do amit sint.</p>
          </td>
          
          <td className="widgetLgCompletion">
            <h4>120 days</h4>
            <p>(Created on 10/12/2021)</p>
          </td>
          <td className="widgetLgTE"><Button type="20,000" /></td>
          <td className="widgetLgQC">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ marginBottom: '8px' }}>120</span>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <BarChartIcon style={{ fontSize: '50px', color: 'grey', marginRight: '0' }} />
          <BarChartIcon style={{ fontSize: '50px', color: 'purple', marginRight: '0' }} />
          <BarChartIcon style={{ fontSize: '50px', color: 'grey', marginRight: '0' }} />
          </div>
          </div>
          </td>
          <td className="widgetLgWG"><LocationCitySharpIcon/><WorkspacesIcon/><PeopleAltIcon /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetInternship" icons-cell>
          <h4>Product Design GVI</h4>
          <p>Amit minim mollit non deserunt est sit aliqua dolor do amit sint.</p>
          </td>
          <td className="widgetLgCompletion">
            <h4>120 days</h4>
            <p>(Created on 10/12/2021)</p>
          </td>
          <td className="widgetLgTE"><Button type="20,000" /></td>
          <td className="widgetLgQC">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ marginBottom: '8px' }}>120</span>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <BarChartIcon style={{ fontSize: '50px', color: 'grey', marginRight: '0' }} />
          <BarChartIcon style={{ fontSize: '50px', color: 'purple', marginRight: '0' }} />
          <BarChartIcon style={{ fontSize: '50px', color: 'grey', marginRight: '0' }} />
          </div>
          </div>
          </td>
          <td className="widgetLgWG"><LocationCitySharpIcon/><WorkspacesIcon/><PeopleAltIcon /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetInternship">
          <h4>Product Design GVI</h4>
          <p>Amit minim mollit non deserunt est sit aliqua dolor do amit sint.</p>
          </td>
          <td className="widgetLgCompletion">
            <h4>120 days</h4>
            <p>(Created on 10/12/2021)</p>
          </td>
          <td className="widgetLgTE"><Button type="20,000" /></td>
          <td className="widgetLgQC">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ marginBottom: '8px' }}>120</span>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <BarChartIcon style={{ fontSize: '50px', color: 'grey', marginRight: '0' }} />
          <BarChartIcon style={{ fontSize: '50px', color: 'purple', marginRight: '0' }} />
          <BarChartIcon style={{ fontSize: '50px', color: 'grey', marginRight: '0' }} />
          </div>
          </div>
          </td>
          <td className="widgetLgWG"><LocationCitySharpIcon/><WorkspacesIcon/><PeopleAltIcon /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetInternship">
          <h4>Product Design GVI</h4>
          <p>Amit minim mollit non deserunt est sit aliqua dolor do amit sint.</p>
          </td>
          <td className="widgetLgCompletion">
            <h4>120 days</h4>
            <p>(Created on 10/12/2021)</p>
          </td>
          <td className="widgetLgTE"><Button type="20,000" /></td>
          <td className="widgetLgQC">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ marginBottom: '8px' }}>120</span>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <BarChartIcon style={{ fontSize: '50px', color: 'grey', marginRight: '0' }} />
          <BarChartIcon style={{ fontSize: '50px', color: 'purple', marginRight: '0' }} />
          <BarChartIcon style={{ fontSize: '50px', color: 'grey', marginRight: '0' }} />
          </div>
          </div>
          </td>

          <td className="widgetLgWG"><LocationCitySharpIcon/><WorkspacesIcon/><PeopleAltIcon /></td>
        </tr>
      </table>
    </div>
  );
}

export default InternshipTable;