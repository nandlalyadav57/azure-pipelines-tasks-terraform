import { TaskScenario } from '../scenarios';
import { TerraformInputs } from '../scenarios-terraform';
import '../scenarios-terraform'
import { env } from './import-azurerm-with-secure-var-file.env';

new TaskScenario<TerraformInputs>()
    .inputAzureRmServiceEndpoint(env.environmentServiceName, env.subscriptionId, env.tenantId, env.servicePrincipalId, env.servicePrincipalKey)
    .inputTerraformCommand(env.terraformCommand)
    .input({ environmentServiceName: env.environmentServiceName })
    .inputTerraformSecureVarsFile(env.secureVarsFile)
    .answerTerraformExists()
    .answerTerraformCommandIsSuccessful()
    .run()
