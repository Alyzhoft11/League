import React, { useState } from "react";
import Input from "../Input";
import Table, { TableDataCell, TableHeader, TableRow } from "../Table";
import { getSummonerAccountId } from "../../../utils/InGameData";

export default function InGame() {
  const [summonerName, setSummonerName] = useState("");

  return (
    <div>
      <div className="w-1/6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getSummonerAccountId(summonerName);
            setSummonerName("");
          }}
        >
          <Input
            value={summonerName}
            onChange={(e) => setSummonerName(e.currentTarget.value)}
            labelText="Summoner Name"
            autoFocus
          />
        </form>
        <div className="mt-5">
          <Table
            header={
              <>
                <TableHeader label="Summoner" />
              </>
            }
          >
            <TableRow>
              <TableDataCell>test</TableDataCell>
            </TableRow>
          </Table>
        </div>
      </div>
    </div>
  );
}
