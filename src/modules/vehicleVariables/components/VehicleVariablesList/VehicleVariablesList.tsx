import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Loader,
  TextInput,
  useToast,
} from "@/common/components";
import {
  vehicleVariablesApi,
  type VehicleVariable,
} from "@/vehicleVariables/api/vehicleVariablesApi";
import { removeHtmlTags } from "@/vehicleVariables/utils";

import styles from "./VehicleVariablesList.module.scss";

export const VehicleVariablesList = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [variables, setVariables] = useState<VehicleVariable[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(true);
  const [hasLoadError, setHasLoadError] = useState(false);

  useEffect(() => {
    const loadVariables = async () => {
      try {
        const data = await vehicleVariablesApi.getAll();

        setVariables(data.Results);
      } catch {
        setHasLoadError(true);

        showToast(
          "Couldn't load vehicle variables. Please try again.",
          "error",
        );
      } finally {
        setLoading(false);
      }
    };

    loadVariables();
  }, [showToast]);

  const filteredVariables = variables.filter((variable) =>
    variable.Name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading) {
    return <Loader />;
  }

  if (hasLoadError) {
    return null;
  }

  return (
    <>
      <TextInput
        className={styles.search}
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search variable..."
      />

      {filteredVariables.length === 0 ? (
        <p className={styles.message}>
          No variables found for your search.
        </p>
      ) : (
        <div className={`card ${styles.tableWrapper}`}>
          <table className={styles.table}>
            <colgroup>
              <col className={styles.colId} />
              <col className={styles.colName} />
              <col className={styles.colDescription} />
            </colgroup>

            <thead>
              <tr>
                <th className={styles.id}>ID</th>
                <th>Name</th>
                <th className={styles.description}>Description</th>
              </tr>
            </thead>

            <tbody>
              {filteredVariables.map((variable) => (
                <tr
                  key={variable.ID}
                  className={styles.row}
                  onClick={() => navigate(`/variables/${variable.ID}`)}
                >
                  <td className={styles.id}>{variable.ID}</td>

                  <td>{variable.Name}</td>

                  <td className={styles.description}>
                    {removeHtmlTags(variable.Description)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
