# Run the `kubectl top pods` command to get the CPU usage for each pod in the cluster
$pod_cpu_usage = kubectl top pods --all-namespaces --containers | ConvertFrom-Csv | Select-Object -Property namespace, name, cpu

# Group the pod CPU usage by deployment and sum the CPU usage for each deployment
$deployment_cpu_usage = $pod_cpu_usage | ForEach-Object { "$($_.namespace)/$($_.name)".Split('-')[0] } | Group-Object | Select-Object -Property Name, @{ Name='Cpu'; Expression={ ($_.Group.cpu | Measure-Object -Sum).Sum } }

# Sort the deployments by CPU usage and get the top 5
$sorted_deployments = $deployment_cpu_usage | Sort-Object -Property Cpu -Descending | Select-Object -First 5

# Print the list of top 5 deployments by CPU usage
foreach ($deployment in $sorted_deployments) {
    $deployment_name = $deployment.Name
    $cpu_usage = $deployment.Cpu
    Write-Host "$deployment_name: $cpu_usage"
}
