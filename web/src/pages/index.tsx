import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Button, TableFooter, makeStyles, createStyles, useTheme, IconButton } from '@material-ui/core';
import LastPageIcon from '@material-ui/icons/LastPage';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Theme } from "@mui/material";

export default function Home() {
  const [data, setData] = useState([{
    cdCarteira: "",
    cdClient: "",
    cdProduto: "",
    dsCarteira: "",
    dsProduto: "",
    dtContrato: "",
    dtVctPre: "",
    idSitVen: "",
    idSituac: "",
    nmClient: "",
    nrAgencia: "",
    nrContrato: "",
    nrCpfCnpj: "",
    nrInst: "",
    nrPresta: "",
    nrProposta: "",
    nrSeqPre: "",
    qtPrestacoes: "",
    tpPresta: "",
    vlAtual: "",
    vlDescon: "",
    vlIof: "",
    vlMora: "",
    vlMulta: "",
    vlOutAcr: "",
    vlPresta: "",
    vlTotal: "",
  }])
  const [page, setPage] = useState(0)
  const [totalRows, setTotalRows] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const getData = async () => {
    const response = await axios.get("http://localhost:8000", {
      params: {
        limit: rowsPerPage,
        page
      }
    })
    setData(response.data.data)
    setTotalRows(response.data.total)
  }
  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(Number(event.target.value));
  };

  useEffect(() => {
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page,rowsPerPage])
  return (
    <>
      <Head>
        <title>Kronoos Test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <TableContainer component={Paper}>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell>Cd Carteira</TableCell>
                <TableCell>Cd Cliente</TableCell>
                <TableCell>Cd Produto</TableCell>
                <TableCell>Ds Carteira</TableCell>
                <TableCell>Ds Produto</TableCell>
                <TableCell>Dt Contrato</TableCell>
                <TableCell>Dt Vct Pre</TableCell>
                <TableCell>Id Sit Ven</TableCell>
                <TableCell>Id Situac</TableCell>
                <TableCell>Nm Client</TableCell>
                <TableCell>Nr Agencia</TableCell>
                <TableCell>Nr Contrato</TableCell>
                <TableCell>Nr Cpf Cnpj</TableCell>
                <TableCell>Nr Inst</TableCell>
                <TableCell>Nr Presta</TableCell>
                <TableCell>Nr Proposta</TableCell>
                <TableCell>Nr Seq Pre</TableCell>
                <TableCell>Qt Prestacoes</TableCell>
                <TableCell>Tp Presta</TableCell>
                <TableCell>Vl Atual</TableCell>
                <TableCell>Vl Desconto</TableCell>
                <TableCell>Vl Iof</TableCell>
                <TableCell>Vl Mora</TableCell>
                <TableCell>Vl Multa</TableCell>
                <TableCell>Vl Out Acr</TableCell>
                <TableCell>Vl Presta</TableCell>
                <TableCell>Vl Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length > 0 && data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.cdCarteira}</TableCell>
                  <TableCell>{row.cdClient}</TableCell>
                  <TableCell>{row.cdProduto}</TableCell>
                  <TableCell>{row.dsCarteira}</TableCell>
                  <TableCell>{row.dsProduto}</TableCell>
                  <TableCell>{row.dtContrato}</TableCell>
                  <TableCell>{row.dtVctPre}</TableCell>
                  <TableCell>{row.idSitVen}</TableCell>
                  <TableCell>{row.idSituac}</TableCell>
                  <TableCell>{row.nmClient}</TableCell>
                  <TableCell>{row.nrAgencia}</TableCell>
                  <TableCell>{row.nrContrato}</TableCell>
                  <TableCell>{row.nrCpfCnpj}</TableCell>
                  <TableCell>{row.nrInst}</TableCell>
                  <TableCell>{row.nrPresta}</TableCell>
                  <TableCell>{row.nrProposta}</TableCell>
                  <TableCell>{row.nrSeqPre}</TableCell>
                  <TableCell>{row.qtPrestacoes}</TableCell>
                  <TableCell>{row.tpPresta}</TableCell>
                  <TableCell>{row.vlAtual}</TableCell>
                  <TableCell>{row.vlDescon}</TableCell>
                  <TableCell>{row.vlIof}</TableCell>
                  <TableCell>{row.vlMora}</TableCell>
                  <TableCell>{row.vlMulta}</TableCell>
                  <TableCell>{row.vlOutAcr}</TableCell>
                  <TableCell>{row.vlPresta}</TableCell>
                  <TableCell>{row.vlTotal}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter >
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={8}
                  count={totalRows}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { 'aria-label': 'Linhas por página' },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </main>
    </>
  );
}
const useStyles1 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }),
);

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}