import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader, useToast } from "@/common/components";
import {
  vehicleVariablesApi,
  type VehicleVariable,
} from "@/vehicleVariables/api";
import { removeHtmlTags } from "@/vehicleVariables/utils";
import styles from "./VehicleVariableDetails.module.scss";

export const VehicleVariableDetails = () => {
  const { variableId } = useParams<{ variableId: string }>();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [variable, setVariable] = useState<VehicleVariable | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVariable = async () => {
      try {
        const foundVariable = await vehicleVariablesApi.getById(
          Number(variableId),
        );

        if (!foundVariable) {
          showToast("Vehicle variable wasn't found.", "error");
          navigate("/variables", { replace: true });

          return;
        }

        setVariable(foundVariable);
      } catch {
        showToast("Couldn't load vehicle variable. Please try again.", "error");

        navigate("/variables", { replace: true });
      } finally {
        setLoading(false);
      }
    };

    loadVariable();
  }, [variableId, navigate, showToast]);

  if (loading) {
    return <Loader />;
  }

  if (!variable) {
    return null;
  }

  return (
    <article className={`card ${styles.card}`}>
      <h1 className={styles.title}>{variable.Name}</h1>

      <dl className={styles.list}>
        <div>
          <dt>ID</dt>
          <dd>{variable.ID}</dd>
        </div>

        <div>
          <dt>Group</dt>
          <dd>{variable.Name}</dd>
        </div>

        <div className={styles.description}>
          <dt>Description</dt>

          <dd>
            {removeHtmlTags(variable.Description) || "Description missing"}
          </dd>
        </div>
      </dl>
    </article>
  );
};
