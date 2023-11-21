import { FormControl } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import {
    Select as BaseSelect,
    selectClasses,
    SelectProps,
    SelectRootSlotProps
  } from '@mui/base/Select';
  import { Option as BaseOption, optionClasses } from '@mui/base/Option';
  import { Popper as BasePopper } from '@mui/base/Popper';
  import { styled } from '@mui/system';
  import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { getAllChallenges } from '../services/Challenges';

const ChallengesTable = ({setCreateChallengesScreen}: any) => {
    const [dataRows, setDataRows] = useState([]);
    const [challenges, setChallenges] = useState([]);
    const [completeChallenge, setCompleteChallenge] = useState([]);
    const [upcomingChallenges, setUpcomingChallenges] = useState([]);
    // getAllChallenges

    //   TODO: add Loading , error
    useEffect(() => {
      getAllChallenges('individual').then((res: any) => {
          console.log("resresresres", res)
          // const formattedData = res?.map((item: any) => ({
          //     ...item,
          //     createdAt: new Date(item.createdAt).toISOString().split('T')[0], // Format date
          // }));
          // console.log("formattedData", formattedData, data)
          setDataRows(res);
          const filterChalengesDataAccordingToTable = res.filter((item:any) => item.challengeStatus === 'all');
          const filterCompleteChallengeDataAccordingToTable = res.filter((item:any) => item.challengeStatus === 'coming');
          const filterDefaultDataAccordingToTable = res.filter((item:any) => item.challengeStatus === 'draft');
          console.log("filterDefaultDataAccordingToTable", filterDefaultDataAccordingToTable)
          setChallenges(filterChalengesDataAccordingToTable);
          setCompleteChallenge(filterCompleteChallengeDataAccordingToTable);
          setUpcomingChallenges(filterDefaultDataAccordingToTable);
      }).catch(error => { console.log("error", error) })
      // setDataRows(data)
  }, [])
  
  console.log("resresresres", upcomingChallenges, dataRows)

    return (
        <section className={`Main_Container`} style={{ padding: '0 2rem' }}>
            <div className="heading">
                <h2>Challenge</h2>
                <div className="heading_contant">
                    <div className="add_member" onClick={() => setCreateChallengesScreen(true)}><AddIcon /><span>Create Challenge</span></div>
                </div>
            </div>
            <div style={{ height: '100%', width: '100%' }}>
                <DataGrid
                    rows={challenges}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 50 },
                        },
                    }}
                    pageSizeOptions={[50, 50]}
                    checkboxSelection
                />
            </div>

            <div className="heading">
                <h2>Complete Challenge</h2>
                <div className="heading_contant">
                    <Select defaultValue={10}>
                        <Option value={10}>10</Option>
                        <Option value={20}>20</Option>
                        <Option value={30}>30</Option>
                        <Option value={20}>40</Option>
                        <Option value={30}>50</Option>
                    </Select>
                </div>
            </div>
            <div style={{ height: '100%', width: '100%' }}>
                <DataGrid
                    rows={completeChallenge}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 50 },
                        },
                    }}
                    pageSizeOptions={[50, 50]}
                    checkboxSelection
                />
            </div>

            <div className="heading">
                <h2>Upcoming Challenges</h2>
                <div className="heading_contant">
                    <Select defaultValue={20}>
                        <Option value={10}>10</Option>
                        <Option value={20}>20</Option>
                        <Option value={30}>30</Option>
                        <Option value={20}>40</Option>
                        <Option value={30}>50</Option>
                    </Select>
                </div>
            </div>
            <div style={{ height: '100%', width: '100%' }}>
                <DataGrid
                    rows={upcomingChallenges}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 50 },
                        },
                    }}
                    pageSizeOptions={[50, 50]}
                    checkboxSelection
                />
            </div>
        </section>
    )
}

export default ChallengesTable;

const Select = React.forwardRef(function CustomSelect<
    TValue extends {},
    Multiple extends boolean,
  >(props: SelectProps<TValue, Multiple>, ref: React.ForwardedRef<HTMLButtonElement>) {
    const slots = {
      root: StyledButton,
      listbox: Listbox,
      popper: Popper,
      ...props.slots,
    };
  
    return <BaseSelect {...props} ref={ref} slots={slots} />;
  });

  const Button = React.forwardRef(function Button<
    TValue extends {},
    Multiple extends boolean,
  >(
    props: SelectRootSlotProps<TValue, Multiple>,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) {
    const { ownerState, ...other } = props;
    return (
      <button type="button" {...other} ref={ref}>
        {other.children}
        <UnfoldMoreRoundedIcon />
      </button>
    );
  });

  const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    900: '#003A75',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
  
  const StyledButton = styled(Button, { shouldForwardProp: () => true })(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    min-width: 320px;
    padding: 8px 12px;
    border-radius: 8px;
    text-align: left;
    line-height: 1.5;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    position: relative;
    box-shadow: 0px 2px 4px ${
      theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
    };
  
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    }
  
    &.${selectClasses.focusVisible} {
      outline: 0;
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
    }
  
    & > svg {
      font-size: 1rem;
      position: absolute;
      height: 100%;
      top: 0;
      right: 10px;
    }
    `,
  );
  
  const Listbox = styled('ul')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 320px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    box-shadow: 0px 2px 4px ${
      theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
    };
    `,
  );
  
  const Option = styled(BaseOption)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionClasses.highlighted} {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
  
    &.${optionClasses.highlighted}.${optionClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionClasses.disabled} {
      color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionClasses.disabled}) {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
    `,
  );
  
  const Popper = styled(BasePopper)`
    z-index: 1;
  `;

  export const rows = [
    { id: 1,  Display_Name: 'Jon', Date_Joined: '', Last_Seen: '' },
];

export const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70  },
    { field: 'Title', width: 170, renderCell: (params) => <img src={params.value} alt={params.value} /> },
    { field: 'name', headerName: 'Display Name', width: 170 },
    { field: 'userId', headerName: 'Member ID', width: 170 },
    { field: 'Date_Joined', headerName: '30)', width: 170 },
    { field: 'Last_Seen', headerName: '30)', width: 170 },
];